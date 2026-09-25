namespace $ {

	class writer {
		bytes = [] as number[]
		uint( value: number ) {
			value = Math.max( 0, Math.round( value ) )
			while( value > 127 ) {
				this.bytes.push( ( value & 127 ) | 128 )
				value = Math.floor( value / 128 )
			}
			this.bytes.push( value )
		}
		int( value: number ) {
			this.uint( value < 0 ? -value * 2 - 1 : value * 2 )
		}
	}

	class reader {
		at = 0
		constructor( public bytes: Uint8Array ) {}
		uint() {
			let value = 0, scale = 1
			while( this.at < this.bytes.length ) {
				const byte = this.bytes[ this.at ++ ]
				value += ( byte & 127 ) * scale
				if( byte < 128 ) break
				scale *= 128
			}
			return value
		}
		int() {
			const value = this.uint()
			return value % 2 ? -( value + 1 ) / 2 : value / 2
		}
	}

	const grid = 1023
	const levels = 7

	export class $bog_doodle_share extends $mol_object {

		static bytes( piece: $bog_doodle_piece ) {
			const inks = [] as string[]
			const ink_index = ( ink: string ) => {
				const index = inks.indexOf( ink )
				if( index >= 0 ) return index
				inks.push( ink )
				return inks.length - 1
			}
			const layer_ids = piece.layers.map( layer => layer.id )
			const body = new writer
			body.uint( piece.patterns.length )
			for( const strokes of piece.patterns ) {
				body.uint( strokes.length )
				for( const stroke of strokes ) {
					const points = $bog_doodle_sketch_simplify( stroke.points, 0.0015 )
					body.uint( ink_index( $bog_doodle_synth_ink( stroke ) ) )
					body.uint( Math.max( 0, layer_ids.indexOf( stroke.layer || layer_ids[ 0 ] ) ) )
					body.uint( ( stroke.size ?? 1 ) * 20 )
					body.uint( points.length / 3 )
					let x = 0, y = 0, p = 0
					for( let i = 0; i < points.length; i += 3 ) {
						const nx = Math.round( Math.max( 0, Math.min( 1, points[ i ] ) ) * grid )
						const ny = Math.round( Math.max( 0, Math.min( 1, points[ i + 1 ] ) ) * grid )
						const np = Math.round( Math.max( 0, Math.min( 1, points[ i + 2 ] ) ) * levels )
						body.int( nx - x )
						body.int( ny - y )
						body.int( np - p )
						x = nx
						y = ny
						p = np
					}
				}
			}
			const head = new TextEncoder().encode( JSON.stringify( {
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
				a: piece.axis,
				l: piece.layers.map( l => [ l.name, l.visible ? 1 : 0, Math.round( ( l.opacity ?? 1 ) * 100 ) ] ),
				i: inks,
			} ) )
			const size = new writer
			size.uint( head.length )
			return new Uint8Array( [ ... size.bytes, ... head, ... body.bytes ] )
		}

		static parse( bytes: Uint8Array ): $bog_doodle_piece {
			const read = new reader( bytes )
			const head_size = read.uint()
			const raw = JSON.parse( new TextDecoder().decode( bytes.slice( read.at, read.at + head_size ) ) )
			read.at += head_size
			const empty = $bog_doodle_piece_empty()
			const inks = ( raw.i ?? [] ) as string[]
			const layers = ( ( raw.l ?? [] ) as unknown[][] ).map( ( [ name, visible, opacity ], index ) => ( {
				id: 'l' + ( index + 1 ),
				name: String( name ?? '' ),
				visible: Boolean( visible ),
				... Number( opacity ) < 100 ? { opacity: Math.max( 0, Number( opacity ) ) / 100 } : {},
			} ) )
			const patterns = [] as $bog_doodle_sketch_strokes[]
			const pattern_count = read.uint()
			for( let pi = 0; pi < pattern_count; ++pi ) {
				const strokes = [] as $bog_doodle_sketch_stroke[]
				const stroke_count = read.uint()
				for( let si = 0; si < stroke_count; ++si ) {
					const ink = inks[ read.uint() ] ?? '#1f1d1a'
					const layer = read.uint()
					const size = read.uint() / 20
					const count = read.uint()
					const points = [] as number[]
					let x = 0, y = 0, p = 0
					for( let k = 0; k < count; ++k ) {
						x += read.int()
						y += read.int()
						p += read.int()
						points.push( x / grid, y / grid, p / levels )
					}
					strokes.push( {
						id: $bog_doodle_sketch_stroke_id(),
						color: $bog_doodle_synth_timbre( ink ),
						ink,
						... size && size !== 1 ? { size } : {},
						layer: 'l' + ( layer + 1 ),
						points,
					} )
				}
				patterns.push( strokes )
			}
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
				axis: raw.a === 'time_x' ? 'time_x' : 'time_y',
				layers: layers.length ? layers : empty.layers,
				patterns: patterns.length ? patterns : [ [] ],
			}
		}

		static async squeeze( bytes: Uint8Array, mode: 'compress' | 'decompress' ) {
			const Stream = mode === 'compress' ? CompressionStream : DecompressionStream
			const stream = new Blob( [ bytes as Uint8Array< ArrayBuffer > ] ).stream().pipeThrough( new Stream( 'deflate-raw' ) )
			return new Uint8Array( await new Response( stream ).arrayBuffer() )
		}

		static async encode( piece: $bog_doodle_piece ) {
			const packed = await this.squeeze( this.bytes( piece ), 'compress' )
			return 'z' + $mol_base64_encode( packed as Uint8Array< ArrayBuffer > ).replace( /\+/g, '-' ).replace( /\//g, '_' ).replace( /=+$/, '' )
		}

		static async decode( code: string ): Promise< $bog_doodle_piece > {
			if( !code.startsWith( 'z' ) ) return $bog_doodle_piece_unpack( code )
			const base64 = code.slice( 1 ).replace( /-/g, '+' ).replace( /_/g, '/' )
			const bytes = $mol_base64_decode( base64 + '='.repeat( ( 4 - base64.length % 4 ) % 4 ) )
			return this.parse( await this.squeeze( bytes, 'decompress' ) )
		}

	}

}
