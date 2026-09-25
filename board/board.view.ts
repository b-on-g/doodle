namespace $.$$ {

	type view = { zoom: number, x: number, y: number }
	type touch = { x: number, y: number }

	export class $bog_doodle_board extends $.$bog_doodle_board {

		@ $mol_mem
		view( next?: view ): view {
			return next ?? { zoom: 1, x: 0, y: 0 }
		}

		@ $mol_mem
		size() {
			const rect = this.view_rect()
			const dpr = this.$.$mol_dom_context.devicePixelRatio || 1
			return {
				width: Math.max( 1, Math.round( ( rect?.width ?? 0 ) * dpr ) ),
				height: Math.max( 1, Math.round( ( rect?.height ?? 0 ) * dpr ) ),
				dpr,
			}
		}

		rect() {
			return ( this.dom_node() as Element ).getBoundingClientRect()
		}

		to_world( client_x: number, client_y: number ) {
			const rect = this.rect()
			const view = this.view()
			const x = ( client_x - rect.left ) / ( rect.width || 1 )
			const y = ( client_y - rect.top ) / ( rect.height || 1 )
			return {
				x: Math.max( 0, Math.min( 0.9999, view.x + x / view.zoom ) ),
				y: Math.max( 0, Math.min( 1, view.y + y / view.zoom ) ),
				raw_x: x,
				raw_y: y,
			}
		}

		view_clamp( next: view ): view {
			const zoom = Math.max( 1, Math.min( 8, next.zoom ) )
			const span = 1 - 1 / zoom
			return {
				zoom,
				x: Math.max( 0, Math.min( span, next.x ) ),
				y: Math.max( 0, Math.min( span, next.y ) ),
			}
		}

		zoom_at( factor: number, raw_x: number, raw_y: number ) {
			const view = this.view()
			const zoom = Math.max( 1, Math.min( 8, view.zoom * factor ) )
			const wx = view.x + raw_x / view.zoom
			const wy = view.y + raw_y / view.zoom
			this.view( this.view_clamp( { zoom, x: wx - raw_x / zoom, y: wy - raw_y / zoom } ) )
		}

		zoom_reset() {
			this.view( { zoom: 1, x: 0, y: 0 } )
		}

		pan_by( raw_dx: number, raw_dy: number ) {
			const view = this.view()
			this.view( this.view_clamp( { ... view, x: view.x - raw_dx / view.zoom, y: view.y - raw_dy / view.zoom } ) )
		}

		gesture = null as null | 'draw' | 'erase' | 'select' | 'move' | 'pan' | 'pinch'
		touches = new Map< number, touch >()
		draft = [] as number[]
		smooth = null as null | { x: number, y: number, p: number }
		erased = new Set< string >()
		box = null as null | { x1: number, y1: number, x2: number, y2: number }
		drag = null as null | { x: number, y: number, dx: number, dy: number }
		pinch = null as null | { dist: number, x: number, y: number }
		hover = null as null | { x: number, y: number }

		pressure( event: PointerEvent ) {
			if( event.pointerType === 'pen' ) return Math.max( 0.05, event.pressure || 0.5 )
			return 0.5
		}

		gesture_tool( event: PointerEvent ) {
			if( event.button === 1 || this.touches.size > 1 ) return 'pan'
			if( this.pen_only() && event.pointerType === 'touch' ) return 'pan'
			const tool = this.tool()
			if( event.button === 2 || ( event.buttons & 32 ) ) return 'erase'
			return tool as 'draw' | 'erase' | 'select' | 'pan'
		}

		pointer_down( event: PointerEvent ) {
			event.preventDefault()
			try { ( this.dom_node() as Element ).setPointerCapture( event.pointerId ) } catch {}
			this.touches.set( event.pointerId, { x: event.clientX, y: event.clientY } )

			if( this.touches.size === 2 ) {
				this.draft = []
				this.gesture = 'pinch'
				this.pinch = this.pinch_state()
				this.redraw()
				return
			}
			if( this.touches.size > 2 ) return

			const point = this.to_world( event.clientX, event.clientY )
			const gesture = this.gesture_tool( event )

			if( gesture === 'draw' ) {
				this.gesture = 'draw'
				this.smooth = null
				this.draft = []
				this.draft_add( point.x, point.y, this.pressure( event ) )
				this.note_play( point.y )
			} else if( gesture === 'erase' ) {
				this.gesture = 'erase'
				this.erased = new Set
				this.erase_at( point.x, point.y )
			} else if( gesture === 'select' ) {
				const hit = this.sketch().hits( point.x, point.y, this.hit_radius() )
				const selected = this.selected()
				if( hit.some( id => selected.includes( id ) ) ) {
					this.gesture = 'move'
					this.drag = { x: point.x, y: point.y, dx: 0, dy: 0 }
				} else if( hit.length ) {
					this.selected( [ hit[ hit.length - 1 ] ] )
					this.gesture = 'move'
					this.drag = { x: point.x, y: point.y, dx: 0, dy: 0 }
				} else {
					this.gesture = 'select'
					this.box = { x1: point.x, y1: point.y, x2: point.x, y2: point.y }
				}
			} else {
				this.gesture = 'pan'
			}
			this.redraw()
		}

		pointer_move( event: PointerEvent ) {
			const prev = this.touches.get( event.pointerId )
			const point = this.to_world( event.clientX, event.clientY )
			this.hover = event.pointerType === 'mouse' ? { x: point.x, y: point.y } : null

			if( !prev ) {
				this.redraw()
				return
			}
			this.touches.set( event.pointerId, { x: event.clientX, y: event.clientY } )

			if( this.gesture === 'pinch' ) {
				const next = this.pinch_state()
				const rect = this.rect()
				if( this.pinch && next ) {
					this.pan_by( ( next.x - this.pinch.x ) / ( rect.width || 1 ), ( next.y - this.pinch.y ) / ( rect.height || 1 ) )
					const raw = this.to_world( next.x, next.y )
					this.zoom_at( next.dist / ( this.pinch.dist || 1 ), raw.raw_x, raw.raw_y )
				}
				this.pinch = next
			} else if( this.gesture === 'pan' ) {
				const rect = this.rect()
				this.pan_by( ( event.clientX - prev.x ) / ( rect.width || 1 ), ( event.clientY - prev.y ) / ( rect.height || 1 ) )
			} else if( this.gesture === 'draw' ) {
				const list = ( event as any ).getCoalescedEvents?.() as PointerEvent[] | undefined
				for( const item of list?.length ? list : [ event ] ) {
					const at = this.to_world( item.clientX, item.clientY )
					this.draft_add( at.x, at.y, this.pressure( item ) )
				}
			} else if( this.gesture === 'erase' ) {
				this.erase_at( point.x, point.y )
			} else if( this.gesture === 'select' && this.box ) {
				this.box = { ... this.box, x2: point.x, y2: point.y }
			} else if( this.gesture === 'move' && this.drag ) {
				this.drag = { ... this.drag, dx: point.x - this.drag.x, dy: point.y - this.drag.y }
			}
			this.redraw()
		}

		pointer_up( event: PointerEvent ) {
			if( !this.touches.has( event.pointerId ) ) return
			this.touches.delete( event.pointerId )
			if( this.gesture === 'pinch' ) {
				if( this.touches.size === 0 ) this.gesture = null
				this.redraw()
				return
			}
			if( this.gesture === 'draw' ) this.draft_commit()
			if( this.gesture === 'erase' ) this.sketch().remove( [ ... this.erased ] )
			if( this.gesture === 'select' && this.box ) {
				const { x1, y1, x2, y2 } = this.box
				this.selected( this.sketch().inside( Math.min( x1, x2 ), Math.min( y1, y2 ), Math.max( x1, x2 ), Math.max( y1, y2 ) ) )
			}
			if( this.gesture === 'move' && this.drag && ( this.drag.dx || this.drag.dy ) ) {
				this.sketch().shift( this.selected(), this.drag.dx, this.drag.dy )
			}
			this.gesture = null
			this.erased = new Set
			this.box = null
			this.drag = null
			this.draft = []
			this.redraw()
		}

		pointer_cancel( event: PointerEvent ) {
			this.touches.delete( event.pointerId )
			this.gesture = null
			this.draft = []
			this.erased = new Set
			this.box = null
			this.drag = null
			this.redraw()
		}

		pointer_leave( event: PointerEvent ) {
			this.hover = null
			this.redraw()
		}

		wheel( event: WheelEvent ) {
			event.preventDefault()
			const point = this.to_world( event.clientX, event.clientY )
			if( event.ctrlKey || event.metaKey ) {
				this.zoom_at( Math.exp( -event.deltaY / 200 ), point.raw_x, point.raw_y )
			} else {
				const rect = this.rect()
				this.pan_by( -event.deltaX / ( rect.width || 1 ), -event.deltaY / ( rect.height || 1 ) )
			}
		}

		context_menu( event: Event ) {
			event.preventDefault()
		}

		pinch_state() {
			const list = [ ... this.touches.values() ]
			if( list.length < 2 ) return null
			const [ a, b ] = list
			return { dist: Math.hypot( a.x - b.x, a.y - b.y ), x: ( a.x + b.x ) / 2, y: ( a.y + b.y ) / 2 }
		}

		hit_radius() {
			return 0.02 / this.view().zoom
		}

		snap_y( y: number ) {
			if( !this.snap() ) return y
			const count = this.notes().length
			return $bog_doodle_scale_row_y( $bog_doodle_scale_row( y, count ), count )
		}

		draft_add( x: number, y: number, p: number ) {
			const prev = this.smooth
			const k = 0.45
			const next = prev
				? { x: prev.x + ( x - prev.x ) * k, y: prev.y + ( y - prev.y ) * k, p: prev.p + ( p - prev.p ) * k }
				: { x, y, p }
			this.smooth = next
			const count = this.draft.length
			if( count >= 3 ) {
				const dx = next.x - this.draft[ count - 3 ]
				const dy = this.snap_y( next.y ) - this.draft[ count - 2 ]
				if( dx * dx + dy * dy < 1e-7 ) return
			}
			this.draft.push( next.x, this.snap_y( next.y ), next.p )
			const row = $bog_doodle_scale_row( next.y, this.notes().length )
			this.note_hover( this.notes()[ row ] ?? null )
		}

		draft_commit() {
			const draft = this.draft
			if( !draft.length ) return
			const points = $bog_doodle_piece_simplify( draft, 0.0012 / this.view().zoom )
			this.sketch().add( { id: $bog_doodle_sketch_stroke_id(), color: this.color(), points } )
			this.note_hover( null )
		}

		note_play( y: number ) {
			const notes = this.notes()
			this.note_hover( notes[ $bog_doodle_scale_row( this.snap_y( y ), notes.length ) ] ?? null )
		}

		erase_at( x: number, y: number ) {
			for( const id of this.sketch().hits( x, y, this.hit_radius() ) ) this.erased.add( id )
		}

		frame = null as $mol_after_frame | null

		redraw() {
			if( this.frame ) return
			this.frame = new this.$.$mol_after_frame( ()=> {
				this.frame = null
				this.present()
			} )
		}

		@ $mol_mem
		back_image() {
			const uri = this.back()
			if( !uri ) return null
			const image = new ( this.$.$mol_dom_context as any ).Image as HTMLImageElement
			image.onload = ()=> this.redraw()
			image.src = uri
			return image
		}

		@ $mol_mem
		layer() {
			const doc = this.$.$mol_dom_context.document
			const canvas = doc.createElement( 'canvas' )
			const { width, height, dpr } = this.size()
			canvas.width = width
			canvas.height = height
			const ctx = canvas.getContext( '2d' )
			if( !ctx ) return canvas
			this.paint_grid( ctx, width, height, dpr )
			this.paint_strokes( ctx, width, height, dpr )
			return canvas
		}

		ink( color: number ) {
			return $bog_doodle_synth_colors[ color ]?.ink ?? '#1f1d1a'
		}

		view_fixed = null as view | null

		view_used() {
			return this.view_fixed ?? this.view()
		}

		sx( x: number, width: number ) {
			const view = this.view_used()
			return ( x - view.x ) * view.zoom * width
		}

		sy( y: number, height: number ) {
			const view = this.view_used()
			return ( y - view.y ) * view.zoom * height
		}

		export_canvas() {
			const canvas = this.$.$mol_dom_context.document.createElement( 'canvas' )
			canvas.width = 1920
			canvas.height = 1080
			const ctx = canvas.getContext( '2d' )
			if( !ctx ) return canvas
			this.view_fixed = { zoom: 1, x: 0, y: 0 }
			try {
				this.paint_grid( ctx, canvas.width, canvas.height, 2 )
				this.paint_strokes( ctx, canvas.width, canvas.height, 2, true )
			} finally {
				this.view_fixed = null
			}
			return canvas
		}

		paint_grid( ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number ) {
			ctx.fillStyle = '#fbfaf6'
			ctx.fillRect( 0, 0, width, height )

			const image = this.back_image()
			if( image?.complete && image.naturalWidth ) {
				ctx.globalAlpha = 0.35
				ctx.drawImage( image, this.sx( 0, width ), this.sy( 0, height ), this.view_used().zoom * width, this.view_used().zoom * height )
				ctx.globalAlpha = 1
			}

			const notes = this.notes()
			const count = notes.length
			const tonic = notes[ 0 ] % 12
			const row_height = this.view_used().zoom * height / count
			for( let row = 0; row < count; ++row ) {
				const top = this.sy( 1 - ( row + 1 ) / count, height )
				if( top > height || top + row_height < 0 ) continue
				if( notes[ row ] % 12 === tonic ) {
					ctx.fillStyle = '#ece7da'
					ctx.fillRect( 0, top, width, row_height )
				} else if( row % 2 ) {
					ctx.fillStyle = '#f5f2ea'
					ctx.fillRect( 0, top, width, row_height )
				}
				if( row_height > 14 * dpr ) {
					ctx.fillStyle = '#a39d8e'
					ctx.font = `${ Math.min( 12, row_height / dpr * 0.5 ) * dpr }px ui-monospace, Menlo, monospace`
					ctx.textBaseline = 'middle'
					ctx.fillText( $bog_doodle_scale_name( notes[ row ] ), 6 * dpr, top + row_height / 2 )
				}
			}

			const steps = this.steps()
			const beat = this.beat_steps()
			const bar = this.bar_steps()
			const step_width = this.view_used().zoom * width / steps
			for( let step = 1; step < steps; ++step ) {
				const strong = step % bar === 0 ? 2 : step % beat === 0 ? 1 : 0
				if( !strong && step_width < 6 * dpr ) continue
				const x = Math.round( this.sx( step / steps, width ) ) + 0.5
				if( x < 0 || x > width ) continue
				ctx.strokeStyle = [ '#ebe6da', '#d6cfbe', '#b3ab98' ][ strong ]
				ctx.lineWidth = strong === 2 ? 2 * dpr : dpr
				ctx.beginPath()
				ctx.moveTo( x, 0 )
				ctx.lineTo( x, height )
				ctx.stroke()
			}
		}

		stroke_width( p: number, dpr: number ) {
			return dpr * Math.sqrt( this.view_used().zoom ) * ( 1.5 + 6 * p )
		}

		paint_path( ctx: CanvasRenderingContext2D, points: readonly number[], color: string, width: number, height: number, dpr: number, dx = 0, dy = 0, halo = false ) {
			const count = points.length / 3
			if( !count ) return
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'
			ctx.strokeStyle = color
			ctx.fillStyle = color
			const px = ( i: number ) => this.sx( points[ i * 3 ] + dx, width )
			const py = ( i: number ) => this.sy( points[ i * 3 + 1 ] + dy, height )
			const pw = ( i: number ) => this.stroke_width( points[ i * 3 + 2 ], dpr ) + ( halo ? 6 * dpr : 0 )
			if( count === 1 ) {
				ctx.beginPath()
				ctx.arc( px( 0 ), py( 0 ), pw( 0 ) / 2 + dpr, 0, Math.PI * 2 )
				ctx.fill()
				return
			}
			let sx = px( 0 ), sy = py( 0 )
			for( let i = 1; i < count; ++i ) {
				const last = i === count - 1
				const ex = last ? px( i ) : ( px( i ) + px( i + 1 ) ) / 2
				const ey = last ? py( i ) : ( py( i ) + py( i + 1 ) ) / 2
				ctx.lineWidth = pw( i )
				ctx.beginPath()
				ctx.moveTo( sx, sy )
				if( last ) ctx.lineTo( ex, ey )
				else ctx.quadraticCurveTo( px( i ), py( i ), ex, ey )
				ctx.stroke()
				sx = ex
				sy = ey
			}
		}

		paint_strokes( ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number, all = false ) {
			const selected = new Set( all ? [] : this.selected() )
			for( const stroke of this.sketch().strokes() ) {
				if( selected.has( stroke.id ) ) continue
				this.paint_path( ctx, stroke.points, this.ink( stroke.color ), width, height, dpr )
			}
		}

		present() {
			const canvas = this.dom_node() as HTMLCanvasElement
			const { width, height, dpr } = this.size()
			if( canvas.width !== width ) canvas.width = width
			if( canvas.height !== height ) canvas.height = height
			const ctx = canvas.getContext?.( '2d' )
			if( !ctx ) return

			ctx.drawImage( this.layer(), 0, 0 )

			const selected = new Set( this.selected() )
			const drag = this.drag
			for( const stroke of this.sketch().strokes() ) {
				if( !selected.has( stroke.id ) ) continue
				this.paint_path( ctx, stroke.points, '#2f6fd855', width, height, dpr, drag?.dx, drag?.dy, true )
				this.paint_path( ctx, stroke.points, this.ink( stroke.color ), width, height, dpr, drag?.dx, drag?.dy )
			}

			if( this.erased.size ) {
				for( const stroke of this.sketch().strokes() ) {
					if( !this.erased.has( stroke.id ) ) continue
					this.paint_path( ctx, stroke.points, '#fbfaf6cc', width, height, dpr, 0, 0, true )
				}
			}

			if( this.draft.length ) this.paint_path( ctx, this.draft, this.ink( this.color() ), width, height, dpr )

			if( this.box ) {
				const { x1, y1, x2, y2 } = this.box
				ctx.setLineDash( [ 6 * dpr, 4 * dpr ] )
				ctx.strokeStyle = '#2f6fd8'
				ctx.lineWidth = dpr
				ctx.strokeRect( this.sx( x1, width ), this.sy( y1, height ), this.sx( x2, width ) - this.sx( x1, width ), this.sy( y2, height ) - this.sy( y1, height ) )
				ctx.setLineDash( [] )
			}

			const head = this.playhead() as number | null
			if( head !== null && head >= 0 ) {
				const x = this.sx( head, width )
				ctx.fillStyle = '#d8452f'
				ctx.fillRect( x - dpr, 0, 2 * dpr, height )
			}

			if( this.hover && this.tool() === 'draw' && !this.gesture ) {
				const notes = this.notes()
				const name = $bog_doodle_scale_name( notes[ $bog_doodle_scale_row( this.snap_y( this.hover.y ), notes.length ) ] )
				ctx.font = `${ 12 * dpr }px ui-monospace, Menlo, monospace`
				ctx.textBaseline = 'bottom'
				ctx.fillStyle = '#1f1d1a'
				ctx.fillText( name, this.sx( this.hover.x, width ) + 10 * dpr, this.sy( this.hover.y, height ) - 6 * dpr )
			}
		}

		animate = null as $mol_after_frame | null

		loop() {
			this.present()
			if( !this.playing() ) {
				this.animate = null
				return
			}
			this.animate = new this.$.$mol_after_frame( ()=> this.loop() )
		}

		@ $mol_mem
		repaint() {
			this.layer()
			this.selected()
			this.playing()
			this.redraw()
			return null
		}

		@ $mol_mem
		animating() {
			if( this.playing() && !this.animate ) this.loop()
			return null
		}

		override auto() {
			this.repaint()
			this.animating()
		}

		override destructor() {
			this.frame?.destructor()
			this.animate?.destructor()
			super.destructor()
		}

	}

}
