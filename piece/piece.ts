namespace $ {

	export type $bog_doodle_piece = {
		title: string
		key: number
		scale: $bog_doodle_scale_id
		octave: number
		range: number
		bpm: number
		bars: number
		grid: $bog_doodle_score_grid
		swing: number
		patterns: readonly $bog_doodle_sketch_strokes[]
		chain: boolean
		back: string
	}

	export function $bog_doodle_piece_empty(): $bog_doodle_piece {
		return {
			title: '',
			key: 0,
			scale: 'major_penta',
			octave: 3,
			range: 2,
			bpm: 100,
			bars: 2,
			grid: '8',
			swing: 0,
			patterns: [ [] ],
			chain: false,
			back: '',
		}
	}

	function points_pack( points: readonly number[] ) {
		const bytes = new Uint8Array( points.length / 3 * 4 )
		for( let i = 0, j = 0; i < points.length; i += 3, j += 4 ) {
			const x = Math.round( Math.max( 0, Math.min( 1, points[ i ] ) ) * 4095 )
			const y = Math.round( Math.max( 0, Math.min( 1, points[ i + 1 ] ) ) * 4095 )
			const p = Math.round( Math.max( 0, Math.min( 1, points[ i + 2 ] ) ) * 255 )
			bytes[ j ] = x >> 4
			bytes[ j + 1 ] = ( ( x & 15 ) << 4 ) | ( y >> 8 )
			bytes[ j + 2 ] = y & 255
			bytes[ j + 3 ] = p
		}
		return $mol_base64_encode( bytes ).replace( /\+/g, '-' ).replace( /\//g, '_' ).replace( /=+$/, '' )
	}

	function points_unpack( str: string ) {
		const base64 = str.replace( /-/g, '+' ).replace( /_/g, '/' )
		const bytes = $mol_base64_decode( base64 + '='.repeat( ( 4 - base64.length % 4 ) % 4 ) )
		const points = [] as number[]
		for( let j = 0; j + 3 < bytes.length; j += 4 ) {
			const x = ( bytes[ j ] << 4 ) | ( bytes[ j + 1 ] >> 4 )
			const y = ( ( bytes[ j + 1 ] & 15 ) << 8 ) | bytes[ j + 2 ]
			points.push( x / 4095, y / 4095, bytes[ j + 3 ] / 255 )
		}
		return points
	}

	export function $bog_doodle_piece_pack( piece: $bog_doodle_piece ) {
		return JSON.stringify( {
			v: 1,
			t: piece.title,
			k: piece.key,
			s: piece.scale,
			o: piece.octave,
			r: piece.range,
			b: piece.bpm,
			n: piece.bars,
			g: piece.grid,
			w: piece.swing,
			c: piece.chain ? 1 : 0,
			p: piece.patterns.map( strokes => strokes.map( s => s.color + '.' + points_pack( s.points ) ) ),
		} )
	}

	export function $bog_doodle_piece_unpack( str: string ): $bog_doodle_piece {
		const raw = JSON.parse( str )
		const empty = $bog_doodle_piece_empty()
		const patterns = ( raw.p as string[][] ?? [ [] ] ).map( strokes => strokes.map( item => {
			const [ color, points ] = item.split( '.' )
			return { id: $bog_doodle_sketch_stroke_id(), color: Number( color ) || 0, points: points_unpack( points ?? '' ) }
		} ) )
		return {
			... empty,
			title: String( raw.t ?? '' ),
			key: Number( raw.k ?? empty.key ),
			scale: raw.s in $bog_doodle_scale_steps ? raw.s : empty.scale,
			octave: Number( raw.o ?? empty.octave ),
			range: Number( raw.r ?? empty.range ),
			bpm: Number( raw.b ?? empty.bpm ),
			bars: Number( raw.n ?? empty.bars ),
			grid: raw.g in $bog_doodle_score_grids ? raw.g : empty.grid,
			swing: Number( raw.w ?? 0 ),
			chain: Boolean( raw.c ),
			patterns: patterns.length ? patterns : [ [] ],
		}
	}

	export function $bog_doodle_piece_simplify( points: readonly number[], tolerance: number ) {
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

}
