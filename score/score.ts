namespace $ {

	export type $bog_doodle_score_event = {
		stroke: string
		color: number
		step: number
		length: number
		midi: number
		velocity: number
	}

	export const $bog_doodle_score_grids = {
		'4': 4,
		'8': 8,
		'8t': 12,
		'16': 16,
		'16t': 24,
		'32': 32,
		'free': 96,
	}

	export type $bog_doodle_score_grid = keyof typeof $bog_doodle_score_grids

	function rows_at( points: readonly number[], left: number, right: number, count: number ) {
		const center = ( left + right ) / 2
		const found = new Map< number, number >()
		for( let i = 0; i + 3 < points.length; i += 3 ) {
			const x1 = points[ i ], x2 = points[ i + 3 ]
			if( Math.min( x1, x2 ) > center || Math.max( x1, x2 ) < center || x1 === x2 ) continue
			const t = ( center - x1 ) / ( x2 - x1 )
			const y = points[ i + 1 ] + t * ( points[ i + 4 ] - points[ i + 1 ] )
			const p = points[ i + 2 ] + t * ( points[ i + 5 ] - points[ i + 2 ] )
			const row = $bog_doodle_scale_row( y, count )
			found.set( row, Math.max( found.get( row ) ?? 0, p ) )
		}
		if( found.size ) return found
		let low = Infinity, high = -Infinity, pressure = 0
		for( let i = 0; i < points.length; i += 3 ) {
			if( points[ i ] < left || points[ i ] >= right ) continue
			const row = $bog_doodle_scale_row( points[ i + 1 ], count )
			low = Math.min( low, row )
			high = Math.max( high, row )
			pressure = Math.max( pressure, points[ i + 2 ] )
		}
		for( let row = low; row <= high; ++row ) found.set( row, pressure )
		return found
	}

	export function $bog_doodle_score( strokes: $bog_doodle_sketch_strokes, notes: readonly number[], steps: number ) {
		const events = [] as $bog_doodle_score_event[]
		for( const stroke of strokes ) {
			const box = $bog_doodle_sketch_stroke_box( stroke )
			const first = Math.max( 0, Math.floor( box.left * steps ) )
			const last = Math.min( steps - 1, Math.max( first, Math.ceil( box.right * steps ) - 1 ) )
			let open = new Map< number, $bog_doodle_score_event >()
			for( let step = first; step <= last; ++step ) {
				const rows = rows_at( stroke.points, step / steps, ( step + 1 ) / steps, notes.length )
				const next = new Map< number, $bog_doodle_score_event >()
				for( const [ row, pressure ] of rows ) {
					const prev = open.get( row )
					if( prev ) {
						prev.length ++
						next.set( row, prev )
						continue
					}
					const event = {
						stroke: stroke.id,
						color: stroke.color,
						step,
						length: 1,
						midi: notes[ row ],
						velocity: Math.round( ( 0.25 + 0.75 * pressure ) * 100 ) / 100,
					}
					events.push( event )
					next.set( row, event )
				}
				open = next
			}
		}
		return events.sort( ( a, b ) => a.step - b.step || a.midi - b.midi )
	}

	export function $bog_doodle_score_time( step: number, steps_per_bar: number, bar_time: number, swing: number ) {
		const step_time = bar_time / steps_per_bar
		const swingable = steps_per_bar === 8 || steps_per_bar === 16
		const shift = swingable && step % 2 === 1 ? swing * step_time / 3 : 0
		return step * step_time + shift
	}

}
