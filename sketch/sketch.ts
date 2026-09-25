namespace $ {

	export type $bog_doodle_sketch_stroke = {
		id: string
		color: number
		points: readonly number[]
		ink?: string
		size?: number
		layer?: string
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

	export function $bog_doodle_sketch_simplify( points: readonly number[], tolerance: number ) {
		const count = points.length / 3
		if( count < 3 ) return points
		const keep = new Uint8Array( count )
		keep[ 0 ] = keep[ count - 1 ] = 1
		const stack = [ [ 0, count - 1 ] ]
		while( stack.length ) {
			const [ from, to ] = stack.pop()!
			const ax = points[ from * 3 ], ay = points[ from * 3 + 1 ]
			const bx = points[ to * 3 ], by = points[ to * 3 + 1 ]
			const len = Math.hypot( bx - ax, by - ay ) || 1e-9
			let far = -1, dist = tolerance
			for( let i = from + 1; i < to; ++i ) {
				const px = points[ i * 3 ], py = points[ i * 3 + 1 ]
				const d = Math.abs( ( bx - ax ) * ( ay - py ) - ( ax - px ) * ( by - ay ) ) / len
				const dp = Math.abs( points[ i * 3 + 2 ] - points[ from * 3 + 2 ] )
				const score = Math.max( d, dp * tolerance * 4 )
				if( score > dist ) {
					dist = score
					far = i
				}
			}
			if( far < 0 ) continue
			keep[ far ] = 1
			stack.push( [ from, far ], [ far, to ] )
		}
		const result = [] as number[]
		for( let i = 0; i < count; ++i ) {
			if( keep[ i ] ) result.push( points[ i * 3 ], points[ i * 3 + 1 ], points[ i * 3 + 2 ] )
		}
		return result
	}

	export function $bog_doodle_sketch_resample( points: readonly number[], step: number ) {
		if( points.length <= 3 ) return points.slice()
		const result = [ points[ 0 ], points[ 1 ], points[ 2 ] ]
		for( let i = 3; i < points.length; i += 3 ) {
			const x0 = points[ i - 3 ], y0 = points[ i - 2 ], p0 = points[ i - 1 ]
			const x1 = points[ i ], y1 = points[ i + 1 ], p1 = points[ i + 2 ]
			const parts = Math.max( 1, Math.ceil( Math.hypot( x1 - x0, y1 - y0 ) / step ) )
			for( let k = 1; k <= parts; ++k ) {
				const t = k / parts
				result.push( x0 + ( x1 - x0 ) * t, y0 + ( y1 - y0 ) * t, p0 + ( p1 - p0 ) * t )
			}
		}
		return result
	}

	export function $bog_doodle_sketch_cut( stroke: $bog_doodle_sketch_stroke, inside: ( x: number, y: number )=> boolean, step: number ) {
		const points = $bog_doodle_sketch_resample( stroke.points, step )
		const runs = [] as { inside: boolean, points: number[] }[]
		for( let i = 0; i < points.length; i += 3 ) {
			const flag = inside( points[ i ], points[ i + 1 ] )
			const last = runs[ runs.length - 1 ]
			if( last && last.inside === flag ) last.points.push( points[ i ], points[ i + 1 ], points[ i + 2 ] )
			else runs.push( { inside: flag, points: [ points[ i ], points[ i + 1 ], points[ i + 2 ] ] } )
		}
		if( runs.length === 1 ) return runs[ 0 ].inside ? { inside: [ stroke ], outside: [] } : { inside: [], outside: [ stroke ] }
		const piece = ( run: { points: number[] } ) => ( {
			... stroke,
			id: $bog_doodle_sketch_stroke_id(),
			points: $bog_doodle_sketch_simplify( run.points, step / 4 ),
		} )
		const single = stroke.points.length <= 3
		return {
			inside: runs.filter( run => run.inside && ( single || run.points.length > 3 ) ).map( piece ),
			outside: runs.filter( run => !run.inside && ( single || run.points.length > 3 ) ).map( piece ),
		}
	}

	export function $bog_doodle_sketch_polygon_has( polygon: readonly number[], x: number, y: number ) {
		let has = false
		for( let i = 0, j = polygon.length - 2; i < polygon.length; j = i, i += 2 ) {
			const xi = polygon[ i ], yi = polygon[ i + 1 ], xj = polygon[ j ], yj = polygon[ j + 1 ]
			if( ( yi > y ) !== ( yj > y ) && x < ( xj - xi ) * ( y - yi ) / ( yj - yi ) + xi ) has = !has
		}
		return has
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

		clear( filter: ( stroke: $bog_doodle_sketch_stroke )=> boolean = ()=> true ) {
			const rest = this.strokes().filter( s => !filter( s ) )
			if( rest.length === this.strokes().length ) return
			this.commit( rest )
		}

		erased( x: number, y: number, radius: number, filter: ( stroke: $bog_doodle_sketch_stroke )=> boolean, strokes = this.strokes() ) {
			const r2 = radius * radius
			const inside = ( px: number, py: number ) => ( px - x ) ** 2 + ( py - y ) ** 2 <= r2
			let changed = false
			const next = [] as $bog_doodle_sketch_stroke[]
			for( const stroke of strokes ) {
				if( !filter( stroke ) || !$bog_doodle_sketch_stroke_near( stroke, x, y, radius ) ) {
					next.push( stroke )
					continue
				}
				changed = true
				next.push( ... $bog_doodle_sketch_cut( stroke, inside, radius / 3 ).outside )
			}
			return changed ? next : strokes
		}

		lasso( polygon: readonly number[], filter: ( stroke: $bog_doodle_sketch_stroke )=> boolean ) {
			if( polygon.length < 6 ) return []
			const inside = ( x: number, y: number ) => $bog_doodle_sketch_polygon_has( polygon, x, y )
			const picked = [] as string[]
			const next = [] as $bog_doodle_sketch_stroke[]
			for( const stroke of this.strokes() ) {
				if( !filter( stroke ) ) {
					next.push( stroke )
					continue
				}
				const cut = $bog_doodle_sketch_cut( stroke, inside, 0.004 )
				next.push( ... cut.outside, ... cut.inside )
				picked.push( ... cut.inside.map( s => s.id ) )
			}
			if( picked.length ) this.commit( next )
			return picked
		}

		hits( x: number, y: number, radius: number, filter: ( stroke: $bog_doodle_sketch_stroke )=> boolean = ()=> true ) {
			return this.strokes()
				.filter( s => filter( s ) && $bog_doodle_sketch_stroke_near( s, x, y, radius ) )
				.map( s => s.id )
		}

		inside( left: number, top: number, right: number, bottom: number, filter: ( stroke: $bog_doodle_sketch_stroke )=> boolean = ()=> true ) {
			return this.strokes().filter( s => {
				if( !filter( s ) ) return false
				const box = $bog_doodle_sketch_stroke_box( s )
				return box.right >= left && box.left <= right && box.bottom >= top && box.top <= bottom
			} ).map( s => s.id )
		}

	}

}
