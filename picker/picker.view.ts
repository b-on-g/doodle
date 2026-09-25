namespace $.$$ {

	export class $bog_doodle_picker extends $.$bog_doodle_picker {

		hsv() {
			return $bog_doodle_picker_hsv( this.value() )
		}

		hue_kept = 0

		@ $mol_mem
		hue( next?: number ): number {
			if( next !== undefined ) return this.hue_kept = next
			const hsv = this.hsv()
			if( hsv.s ) this.hue_kept = hsv.h
			return this.hue_kept
		}

		hue_css() {
			return `hsl(${ Math.round( this.hue() ) }deg 100% 50%)`
		}

		area_left() {
			return `${ this.hsv().s * 100 }%`
		}

		area_top() {
			return `${ ( 1 - this.hsv().v ) * 100 }%`
		}

		hue_left() {
			return `${ this.hue() / 360 * 100 }%`
		}

		spot( event: PointerEvent, node: Element ) {
			const rect = node.getBoundingClientRect()
			return {
				x: Math.max( 0, Math.min( 1, ( event.clientX - rect.left ) / ( rect.width || 1 ) ) ),
				y: Math.max( 0, Math.min( 1, ( event.clientY - rect.top ) / ( rect.height || 1 ) ) ),
			}
		}

		dragging = ''

		area_pick( event: PointerEvent ) {
			const { x, y } = this.spot( event, this.Area().dom_node() as Element )
			this.value( $bog_doodle_picker_hex( this.hue(), x, 1 - y ) )
		}

		area_down( event: PointerEvent ) {
			event.preventDefault()
			try { ( this.Area().dom_node() as Element ).setPointerCapture( event.pointerId ) } catch {}
			this.dragging = 'area'
			this.area_pick( event )
		}

		area_move( event: PointerEvent ) {
			if( this.dragging === 'area' ) this.area_pick( event )
		}

		area_up( event: PointerEvent ) {
			this.dragging = ''
		}

		hue_pick( event: PointerEvent ) {
			const { x } = this.spot( event, this.Hue().dom_node() as Element )
			const hue = Math.min( 359.9, x * 360 )
			this.hue( hue )
			const { s, v } = this.hsv()
			this.value( $bog_doodle_picker_hex( hue, s || 0.8, s ? v : Math.max( v, 0.7 ) ) )
		}

		hue_down( event: PointerEvent ) {
			event.preventDefault()
			try { ( this.Hue().dom_node() as Element ).setPointerCapture( event.pointerId ) } catch {}
			this.dragging = 'hue'
			this.hue_pick( event )
		}

		hue_move( event: PointerEvent ) {
			if( this.dragging === 'hue' ) this.hue_pick( event )
		}

		hue_up( event: PointerEvent ) {
			this.dragging = ''
		}

		swatch_list() {
			return this.swatches().map( color => this.Swatch( color ) )
		}

		swatch_color( color: string ) {
			return color
		}

		swatch_pick( color: string ) {
			const hsv = $bog_doodle_picker_hsv( color )
			if( hsv.s ) this.hue( hsv.h )
			this.value( color )
		}

		hex( next?: string ) {
			if( next !== undefined ) {
				const clean = next.trim().startsWith( '#' ) ? next.trim() : '#' + next.trim()
				if( $bog_doodle_picker_valid( clean ) ) this.swatch_pick( clean.toLowerCase() )
				return next
			}
			return this.value()
		}

	}

}
