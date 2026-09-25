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

		time_down() {
			return this.axis() === 'time_y'
		}

		norm( x: number, y: number ) {
			return this.time_down() ? { u: 1 - y, v: x } : { u: x, v: y }
		}

		denorm( u: number, v: number ) {
			return this.time_down() ? { x: v, y: 1 - u } : { x: u, y: v }
		}

		pt( x: number, y: number, width: number, height: number ) {
			const view = this.view_used()
			const { u, v } = this.norm( x, y )
			return { x: ( u - view.x ) * view.zoom * width, y: ( v - view.y ) * view.zoom * height }
		}

		to_world( client_x: number, client_y: number ) {
			const rect = this.rect()
			const view = this.view()
			const raw_x = ( client_x - rect.left ) / ( rect.width || 1 )
			const raw_y = ( client_y - rect.top ) / ( rect.height || 1 )
			const { x, y } = this.denorm( view.x + raw_x / view.zoom, view.y + raw_y / view.zoom )
			return {
				x: Math.max( 0, Math.min( 0.9999, x ) ),
				y: Math.max( 0, Math.min( 1, y ) ),
				raw_x,
				raw_y,
			}
		}

		zoom_min() {
			return 0.4
		}

		view_clamp( next: view ): view {
			const zoom = Math.max( this.zoom_min(), Math.min( 8, next.zoom ) )
			const span = 1 - 1 / zoom
			const fit = ( value: number ) => span < 0 ? span / 2 : Math.max( 0, Math.min( span, value ) )
			return { zoom, x: fit( next.x ), y: fit( next.y ) }
		}

		zoom_at( factor: number, raw_x: number, raw_y: number ) {
			const view = this.view()
			const zoom = Math.max( this.zoom_min(), Math.min( 8, view.zoom * factor ) )
			const u = view.x + raw_x / view.zoom
			const v = view.y + raw_y / view.zoom
			this.view( this.view_clamp( { zoom, x: u - raw_x / zoom, y: v - raw_y / zoom } ) )
		}

		zoom_in() {
			this.zoom_at( 1.25, 0.5, 0.5 )
		}

		zoom_out() {
			this.zoom_at( 0.8, 0.5, 0.5 )
		}

		zoom_reset() {
			this.view( { zoom: 1, x: 0, y: 0 } )
		}

		zoom_percent() {
			return Math.round( this.view().zoom * 100 ) + '%'
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
		hover = null as null | { x: number, y: number, erase: boolean }

		pressure( event: PointerEvent ) {
			if( event.pointerType === 'pen' ) return Math.max( 0.05, event.pressure || 0.5 )
			return 0.5
		}

		gesture_tool( event: PointerEvent ) {
			if( event.button === 1 || this.touches.size > 1 ) return 'pan'
			if( this.pen_only() && event.pointerType === 'touch' ) return 'pan'
			if( event.button === 2 || ( event.buttons & 32 ) ) return 'erase'
			return this.tool() as 'draw' | 'erase' | 'select' | 'pan'
		}

		layer_of( stroke: $bog_doodle_sketch_stroke ) {
			return stroke.layer || this.layer_default()
		}

		editable( stroke: $bog_doodle_sketch_stroke ) {
			return this.layer_of( stroke ) === this.layer_active() && this.layer_order().includes( this.layer_active() )
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
			} else if( gesture === 'erase' ) {
				this.gesture = 'erase'
				this.erased = new Set
				this.erase_at( point.x, point.y )
			} else if( gesture === 'select' ) {
				const hit = this.sketch().hits( point.x, point.y, this.hit_radius(), s => this.editable( s ) )
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
			this.hover = event.pointerType === 'touch' ? null : { x: point.x, y: point.y, erase: Boolean( event.buttons & 32 ) }

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
				this.selected( this.sketch().inside(
					Math.min( x1, x2 ), Math.min( y1, y2 ), Math.max( x1, x2 ), Math.max( y1, y2 ),
					s => this.editable( s ),
				) )
			}
			if( this.gesture === 'move' && this.drag && ( this.drag.dx || this.drag.dy ) ) {
				this.sketch().shift( this.selected(), this.drag.dx, this.drag.dy )
			}
			this.gesture_reset()
		}

		gesture_reset() {
			this.gesture = null
			this.erased = new Set
			this.box = null
			this.drag = null
			this.draft = []
			this.note_hover( null )
			this.redraw()
		}

		pointer_cancel( event: PointerEvent ) {
			this.touches.delete( event.pointerId )
			this.gesture_reset()
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

		world_per_px() {
			const rect = this.rect()
			return 1 / ( Math.max( 1, Math.min( rect.width, rect.height ) ) * this.view().zoom )
		}

		hit_radius() {
			return 10 * this.world_per_px()
		}

		erase_radius() {
			return this.eraser() / 2 * this.world_per_px()
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
			const snapped = this.snap_y( next.y )
			if( count >= 3 ) {
				const dx = next.x - this.draft[ count - 3 ]
				const dy = snapped - this.draft[ count - 2 ]
				if( dx * dx + dy * dy < 1e-7 ) return
			}
			this.draft.push( next.x, snapped, next.p )
			this.note_hover( this.notes()[ $bog_doodle_scale_row( snapped, this.notes().length ) ] ?? null )
		}

		draft_commit() {
			const draft = this.draft
			if( !draft.length ) return
			const points = $bog_doodle_piece_simplify( draft, 0.0012 / this.view().zoom )
			const ink = this.ink()
			const size = this.brush()
			this.sketch().add( {
				id: $bog_doodle_sketch_stroke_id(),
				color: $bog_doodle_synth_timbre( ink ),
				ink,
				... size === 1 ? {} : { size },
				layer: this.layer_active(),
				points,
			} )
		}

		erase_at( x: number, y: number ) {
			for( const id of this.sketch().hits( x, y, this.erase_radius(), s => this.editable( s ) ) ) this.erased.add( id )
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

		view_fixed = null as view | null

		view_used() {
			return this.view_fixed ?? this.view()
		}

		export_canvas() {
			const canvas = this.$.$mol_dom_context.document.createElement( 'canvas' )
			const wide = !this.time_down()
			canvas.width = wide ? 1920 : 1080
			canvas.height = wide ? 1080 : 1920
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

		fill_world( ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, width: number, height: number ) {
			const a = this.pt( x1, y1, width, height )
			const b = this.pt( x2, y2, width, height )
			ctx.fillRect( Math.min( a.x, b.x ), Math.min( a.y, b.y ), Math.abs( b.x - a.x ), Math.abs( b.y - a.y ) )
		}

		paint_grid( ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number ) {
			ctx.fillStyle = '#d6d0c2'
			ctx.fillRect( 0, 0, width, height )
			ctx.fillStyle = '#fbfaf6'
			this.fill_world( ctx, 0, 0, 1, 1, width, height )

			const image = this.back_image()
			if( image?.complete && image.naturalWidth ) {
				const a = this.pt( 0, 1, width, height )
				const b = this.pt( 1, 0, width, height )
				ctx.globalAlpha = 0.35
				ctx.drawImage( image, Math.min( a.x, b.x ), Math.min( a.y, b.y ), Math.abs( b.x - a.x ), Math.abs( b.y - a.y ) )
				ctx.globalAlpha = 1
			}

			const notes = this.notes()
			const count = notes.length
			const tonic = notes[ 0 ] % 12
			const zoom = this.view_used().zoom
			const band = zoom * ( this.time_down() ? width : height ) / count
			for( let row = 0; row < count; ++row ) {
				const top = 1 - ( row + 1 ) / count
				const bottom = 1 - row / count
				if( notes[ row ] % 12 === tonic ) {
					ctx.fillStyle = '#ece7da'
					this.fill_world( ctx, 0, top, 1, bottom, width, height )
				} else if( row % 2 ) {
					ctx.fillStyle = '#f5f2ea'
					this.fill_world( ctx, 0, top, 1, bottom, width, height )
				}
				if( band < 18 * dpr ) continue
				const center = this.pt( 0, ( top + bottom ) / 2, width, height )
				ctx.fillStyle = '#a39d8e'
				ctx.font = `${ Math.min( 12, band / dpr * 0.4 ) * dpr }px ui-monospace, Menlo, monospace`
				if( this.time_down() ) {
					ctx.textAlign = 'center'
					ctx.textBaseline = 'top'
					ctx.fillText( $bog_doodle_scale_name( notes[ row ] ), center.x, Math.max( 0, center.y ) + 6 * dpr )
				} else {
					ctx.textAlign = 'left'
					ctx.textBaseline = 'middle'
					ctx.fillText( $bog_doodle_scale_name( notes[ row ] ), Math.max( 0, center.x ) + 6 * dpr, center.y )
				}
			}
			ctx.textAlign = 'left'

			const steps = this.steps()
			const beat = this.beat_steps()
			const bar = this.bar_steps()
			const step_size = zoom * ( this.time_down() ? height : width ) / steps
			for( let step = 1; step < steps; ++step ) {
				const strong = step % bar === 0 ? 2 : step % beat === 0 ? 1 : 0
				if( !strong && step_size < 6 * dpr ) continue
				const a = this.pt( step / steps, 0, width, height )
				const b = this.pt( step / steps, 1, width, height )
				ctx.strokeStyle = [ '#ebe6da', '#d6cfbe', '#b3ab98' ][ strong ]
				ctx.lineWidth = strong === 2 ? 2 * dpr : dpr
				ctx.beginPath()
				ctx.moveTo( Math.round( a.x ) + 0.5, Math.round( a.y ) + 0.5 )
				ctx.lineTo( Math.round( b.x ) + 0.5, Math.round( b.y ) + 0.5 )
				ctx.stroke()
			}
		}

		stroke_width( p: number, size: number, dpr: number ) {
			return dpr * Math.sqrt( this.view_used().zoom ) * ( 1.5 + 6 * p ) * size
		}

		paint_path( ctx: CanvasRenderingContext2D, points: readonly number[], color: string, size: number, width: number, height: number, dpr: number, dx = 0, dy = 0, halo = false ) {
			const count = points.length / 3
			if( !count ) return
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'
			ctx.strokeStyle = color
			ctx.fillStyle = color
			const at = ( i: number ) => this.pt( points[ i * 3 ] + dx, points[ i * 3 + 1 ] + dy, width, height )
			const pw = ( i: number ) => this.stroke_width( points[ i * 3 + 2 ], size, dpr ) + ( halo ? 6 * dpr : 0 )
			if( count === 1 ) {
				const p = at( 0 )
				ctx.beginPath()
				ctx.arc( p.x, p.y, pw( 0 ) / 2 + dpr, 0, Math.PI * 2 )
				ctx.fill()
				return
			}
			let start = at( 0 )
			for( let i = 1; i < count; ++i ) {
				const last = i === count - 1
				const here = at( i )
				const next = last ? here : at( i + 1 )
				const end = last ? here : { x: ( here.x + next.x ) / 2, y: ( here.y + next.y ) / 2 }
				ctx.lineWidth = pw( i )
				ctx.beginPath()
				ctx.moveTo( start.x, start.y )
				if( last ) ctx.lineTo( end.x, end.y )
				else ctx.quadraticCurveTo( here.x, here.y, end.x, end.y )
				ctx.stroke()
				start = end
			}
		}

		ordered() {
			const order = this.layer_order()
			const strokes = this.sketch().strokes()
			const list = [] as $bog_doodle_sketch_stroke[]
			for( const id of order ) {
				for( const stroke of strokes ) if( this.layer_of( stroke ) === id ) list.push( stroke )
			}
			return list
		}

		scratch = null as HTMLCanvasElement | null

		paint_faded( ctx: CanvasRenderingContext2D, width: number, height: number, alpha: number, paint: ( ctx: CanvasRenderingContext2D )=> void ) {
			const canvas = this.scratch ?? ( this.scratch = this.$.$mol_dom_context.document.createElement( 'canvas' ) )
			if( canvas.width !== width ) canvas.width = width
			if( canvas.height !== height ) canvas.height = height
			const temp = canvas.getContext( '2d' )
			if( !temp ) return
			temp.clearRect( 0, 0, width, height )
			paint( temp )
			ctx.globalAlpha = alpha
			ctx.drawImage( canvas, 0, 0 )
			ctx.globalAlpha = 1
		}

		paint_strokes( ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number, all = false ) {
			const selected = new Set( all ? [] : this.selected() )
			const active = this.layer_active()
			const focus = this.layer_focus() && !all
			const strokes = this.ordered().filter( stroke => !selected.has( stroke.id ) )
			for( const id of this.layer_order() ) {
				const list = strokes.filter( stroke => this.layer_of( stroke ) === id )
				if( !list.length ) continue
				const paint = ( target: CanvasRenderingContext2D ) => {
					for( const stroke of list ) {
						this.paint_path( target, stroke.points, $bog_doodle_synth_ink( stroke ), stroke.size ?? 1, width, height, dpr )
					}
				}
				if( focus && id !== active ) this.paint_faded( ctx, width, height, 0.3, paint )
				else paint( ctx )
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

			const picked = new Set( this.selected() )
			const selected = this.sketch().strokes().filter( stroke => picked.has( stroke.id ) )
			const drag = this.drag
			if( selected.length ) {
				this.paint_faded( ctx, width, height, 0.35, target => {
					for( const stroke of selected ) {
						this.paint_path( target, stroke.points, '#2f6fd8', stroke.size ?? 1, width, height, dpr, drag?.dx, drag?.dy, true )
					}
				} )
				for( const stroke of selected ) {
					this.paint_path( ctx, stroke.points, $bog_doodle_synth_ink( stroke ), stroke.size ?? 1, width, height, dpr, drag?.dx, drag?.dy )
				}
			}

			if( this.erased.size ) {
				const erased = this.sketch().strokes().filter( stroke => this.erased.has( stroke.id ) )
				this.paint_faded( ctx, width, height, 0.8, target => {
					for( const stroke of erased ) {
						this.paint_path( target, stroke.points, '#fbfaf6', stroke.size ?? 1, width, height, dpr, 0, 0, true )
					}
				} )
			}

			if( this.draft.length ) this.paint_path( ctx, this.draft, this.ink(), this.brush(), width, height, dpr )

			if( this.box ) {
				const { x1, y1, x2, y2 } = this.box
				const a = this.pt( x1, y1, width, height )
				const b = this.pt( x2, y2, width, height )
				ctx.setLineDash( [ 6 * dpr, 4 * dpr ] )
				ctx.strokeStyle = '#2f6fd8'
				ctx.lineWidth = dpr
				ctx.strokeRect( a.x, a.y, b.x - a.x, b.y - a.y )
				ctx.setLineDash( [] )
			}

			const head = this.playhead() as number | null
			if( head !== null && head >= 0 ) {
				const a = this.pt( head, 0, width, height )
				const b = this.pt( head, 1, width, height )
				ctx.strokeStyle = '#d8452f'
				ctx.lineWidth = 2 * dpr
				ctx.beginPath()
				ctx.moveTo( a.x, a.y )
				ctx.lineTo( b.x, b.y )
				ctx.stroke()
			}

			this.paint_cursor( ctx, width, height, dpr )
		}

		paint_cursor( ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number ) {
			const hover = this.hover
			if( !hover || this.gesture === 'pan' || this.gesture === 'pinch' ) return
			const tool = hover.erase || this.gesture === 'erase' ? 'erase' : this.tool()
			const at = this.pt( hover.x, hover.y, width, height )
			if( tool === 'erase' ) {
				ctx.strokeStyle = '#1f1d1a88'
				ctx.lineWidth = dpr
				ctx.beginPath()
				ctx.arc( at.x, at.y, this.eraser() / 2 * dpr, 0, Math.PI * 2 )
				ctx.stroke()
				return
			}
			if( tool !== 'draw' || this.gesture ) return
			ctx.strokeStyle = this.ink() + '99'
			ctx.lineWidth = dpr
			ctx.beginPath()
			ctx.arc( at.x, at.y, Math.max( 2 * dpr, this.stroke_width( 0.5, this.brush(), dpr ) / 2 ), 0, Math.PI * 2 )
			ctx.stroke()
			const notes = this.notes()
			const name = $bog_doodle_scale_name( notes[ $bog_doodle_scale_row( this.snap_y( hover.y ), notes.length ) ] )
			ctx.font = `${ 12 * dpr }px ui-monospace, Menlo, monospace`
			ctx.textBaseline = 'bottom'
			ctx.fillStyle = '#1f1d1a'
			ctx.fillText( name, at.x + 10 * dpr, at.y - 6 * dpr )
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
			this.ink()
			this.brush()
			this.eraser()
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
