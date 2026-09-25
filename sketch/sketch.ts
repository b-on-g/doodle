namespace $ {

	export type $bog_doodle_sketch_stroke = {
		id: string
		color: number
		points: readonly number[]
	}

	export type $bog_doodle_sketch_strokes = readonly $bog_doodle_sketch_stroke[]

	export function $bog_doodle_sketch_stroke_box( stroke: $bog_doodle_sketch_stroke ) {
		let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity
		const points = stroke.points
		for( let i = 0; i < points.length; i += 3 ) {
			left = Math.min( left, points[ i ] )
			right = Math.max( right, points[ i ] )
			top = Math.min( top, points[ i + 1 ] )
			bottom = Math.max( bottom, points[ i + 1 ] )
		}
		return { left, right, top, bottom }
	}

	export function $bog_doodle_sketch_stroke_near( stroke: $bog_doodle_sketch_stroke, x: number, y: number, radius: number ) {
		const points = stroke.points
		const r2 = radius * radius
		for( let i = 0; i < points.length; i += 3 ) {
			const dx = points[ i ] - x
			const dy = points[ i + 1 ] - y
			if( dx * dx + dy * dy <= r2 ) return true
			if( i + 3 >= points.length ) continue
			const sx = points[ i + 3 ] - points[ i ]
			const sy = points[ i + 4 ] - points[ i + 1 ]
			const len = sx * sx + sy * sy
			if( !len ) continue
			const t = Math.max( 0, Math.min( 1, ( ( x - points[ i ] ) * sx + ( y - points[ i + 1 ] ) * sy ) / len ) )
			const px = points[ i ] + t * sx - x
			const py = points[ i + 1 ] + t * sy - y
			if( px * px + py * py <= r2 ) return true
		}
		return false
	}

	export function $bog_doodle_sketch_stroke_shift( stroke: $bog_doodle_sketch_stroke, dx: number, dy: number, id = stroke.id ) {
		const points = stroke.points.map( ( v, i ) => {
			if( i % 3 === 0 ) return Math.max( 0, Math.min( 0.9999, v + dx ) )
			if( i % 3 === 1 ) return Math.max( 0, Math.min( 1, v + dy ) )
			return v
		} )
		return { ... stroke, id, points }
	}

	export function $bog_doodle_sketch_stroke_id() {
		return Math.random().toString( 36 ).slice( 2, 10 )
	}

	export class $bog_doodle_sketch extends $mol_object {

		@ $mol_mem
		strokes( next?: $bog_doodle_sketch_strokes ): $bog_doodle_sketch_strokes {
			return next ?? []
		}

		@ $mol_mem
		past( next?: readonly $bog_doodle_sketch_strokes[] ): readonly $bog_doodle_sketch_strokes[] {
			return next ?? []
		}

		@ $mol_mem
		future( next?: readonly $bog_doodle_sketch_strokes[] ): readonly $bog_doodle_sketch_strokes[] {
			return next ?? []
		}

		commit( next: $bog_doodle_sketch_strokes ) {
			const prev = this.strokes()
			if( prev === next ) return
			this.past( [ ... this.past().slice( -199 ), prev ] )
			this.future( [] )
			this.strokes( next )
		}

		reset( next: $bog_doodle_sketch_strokes ) {
			this.past( [] )
			this.future( [] )
			this.strokes( next )
		}

		undo_enabled() {
			return this.past().length > 0
		}

		redo_enabled() {
			return this.future().length > 0
		}

		undo() {
			const past = this.past()
			if( !past.length ) return
			this.future( [ this.strokes(), ... this.future() ] )
			this.past( past.slice( 0, -1 ) )
			this.strokes( past[ past.length - 1 ] )
		}

		redo() {
			const future = this.future()
			if( !future.length ) return
			this.past( [ ... this.past(), this.strokes() ] )
			this.future( future.slice( 1 ) )
			this.strokes( future[ 0 ] )
		}

		add( stroke: $bog_doodle_sketch_stroke ) {
			this.commit( [ ... this.strokes(), stroke ] )
		}

		remove( ids: readonly string[] ) {
			if( !ids.length ) return
			const drop = new Set( ids )
			this.commit( this.strokes().filter( s => !drop.has( s.id ) ) )
		}

		shift( ids: readonly string[], dx: number, dy: number ) {
			if( !ids.length ) return
			const moved = new Set( ids )
			this.commit( this.strokes().map( s => moved.has( s.id ) ? $bog_doodle_sketch_stroke_shift( s, dx, dy ) : s ) )
		}

		copy( ids: readonly string[], dx: number, dy: number ) {
			const picked = new Set( ids )
			const copies = this.strokes()
				.filter( s => picked.has( s.id ) )
				.map( s => $bog_doodle_sketch_stroke_shift( s, dx, dy, $bog_doodle_sketch_stroke_id() ) )
			if( !copies.length ) return []
			this.commit( [ ... this.strokes(), ... copies ] )
			return copies.map( s => s.id )
		}

		clear() {
			if( !this.strokes().length ) return
			this.commit( [] )
		}

		hits( x: number, y: number, radius: number ) {
			return this.strokes().filter( s => $bog_doodle_sketch_stroke_near( s, x, y, radius ) ).map( s => s.id )
		}

		inside( left: number, top: number, right: number, bottom: number ) {
			return this.strokes().filter( s => {
				const box = $bog_doodle_sketch_stroke_box( s )
				return box.right >= left && box.left <= right && box.bottom >= top && box.top <= bottom
			} ).map( s => s.id )
		}

	}

}
