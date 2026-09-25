namespace $ {

	const drawing = () => {
		const strokes = [] as $bog_doodle_sketch_stroke[]
		let seed = 3
		const rnd = () => ( seed = ( seed * 16807 ) % 2147483647 ) / 2147483647
		for( let i = 0; i < 100; ++i ) {
			const points = [] as number[]
			let x = rnd() * 0.8, y = rnd()
			for( let k = 0; k < 20; ++k ) {
				x = Math.min( 0.9999, x + 0.01 )
				y = Math.min( 1, Math.max( 0, y + ( rnd() - 0.5 ) * 0.02 ) )
				points.push( x, y, 0.5 )
			}
			strokes.push( { id: 's' + i, color: 4, ink: [ '#e39a1b', '#b55a2c', '#a2a4f9' ][ i % 3 ], size: 2, layer: 'lx', points } )
		}
		return {
			... $bog_doodle_piece_empty(),
			title: 'Пппп',
			key: 11,
			axis: 'time_x' as const,
			layers: [ { id: 'lx', name: 'Фон', visible: true, opacity: 0.5 } ],
			patterns: [ strokes, [], [] ],
		}
	}

	$mol_test({

		'binary form keeps the drawing'() {
			const piece = drawing()
			const back = $bog_doodle_share.parse( $bog_doodle_share.bytes( piece ) )
			$mol_assert_equal( back.title, 'Пппп' )
			$mol_assert_equal( back.key, 11 )
			$mol_assert_equal( back.axis, 'time_x' )
			$mol_assert_like( back.layers, [ { id: 'l1', name: 'Фон', visible: true, opacity: 0.5 } ] )
			$mol_assert_equal( back.patterns.length, 3 )
			const [ a, b ] = [ piece.patterns[ 0 ][ 7 ], back.patterns[ 0 ][ 7 ] ]
			$mol_assert_equal( b.ink, a.ink )
			$mol_assert_equal( b.size, 2 )
			$mol_assert_equal( b.layer, 'l1' )
			$mol_assert_equal( b.color, $bog_doodle_synth_timbre( a.ink! ) )
			$mol_assert_ok( b.points.length <= a.points.length )
			for( const [ i, j ] of [ [ 0, 0 ], [ 1, 1 ], [ a.points.length - 3, b.points.length - 3 ], [ a.points.length - 2, b.points.length - 2 ] ] ) {
				$mol_assert_ok( Math.abs( a.points[ i ] - b.points[ j ] ) < 0.002 )
			}
		},

		async 'compressed link is several times shorter and opens back'() {
			const piece = drawing()
			const code = await $bog_doodle_share.encode( piece )
			const old = encodeURIComponent( $bog_doodle_piece_pack( piece ) )
			$mol_assert_ok( code.length * 3 < old.length )
			$mol_assert_ok( /^z[A-Za-z0-9_-]+$/.test( code ) )
			const back = await $bog_doodle_share.decode( code )
			$mol_assert_equal( back.patterns[ 0 ].length, 100 )
		},

		async 'old json links still open'() {
			const back = await $bog_doodle_share.decode( '{"v":1,"k":2,"p":[["3.AAAAgA"]]}' )
			$mol_assert_equal( back.key, 2 )
			$mol_assert_equal( back.patterns[ 0 ].length, 1 )
		},

	})

}
