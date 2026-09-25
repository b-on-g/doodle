namespace $ {

	$mol_test({

		'piece survives the share link'() {
			const piece = {
				... $bog_doodle_piece_empty(),
				title: 'Дождь',
				key: 9,
				scale: 'dorian' as const,
				bpm: 132,
				grid: '16t' as const,
				swing: 0.5,
				chain: true,
				patterns: [
					[ { id: 'a', color: 3, points: [ 0, 0, 0, 0.5, 0.25, 1, 0.9999, 1, 0.5 ] } ],
					[],
				],
			}
			const back = $bog_doodle_piece_unpack( $bog_doodle_piece_pack( piece ) )
			$mol_assert_equal( back.title, 'Дождь' )
			$mol_assert_equal( back.key, 9 )
			$mol_assert_equal( back.scale, 'dorian' )
			$mol_assert_equal( back.grid, '16t' )
			$mol_assert_equal( back.chain, true )
			$mol_assert_equal( back.patterns.length, 2 )
			const stroke = back.patterns[ 0 ][ 0 ]
			$mol_assert_equal( stroke.color, 3 )
			$mol_assert_like( stroke.points.map( ( v: number ) => Math.round( v * 100 ) / 100 ), [ 0, 0, 0, 0.5, 0.25, 1, 1, 1, 0.5 ] )
		},

		'broken fields fall back to defaults'() {
			const back = $bog_doodle_piece_unpack( '{"s":"nope","g":"x"}' )
			$mol_assert_equal( back.scale, 'major_penta' )
			$mol_assert_equal( back.grid, '8' )
			$mol_assert_equal( back.patterns.length, 1 )
		},

		'straight line keeps only its ends'() {
			const points = [ 0, 0, 0.5, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 1, 1, 0.5 ]
			$mol_assert_like( $bog_doodle_piece_simplify( points, 0.001 ), [ 0, 0, 0.5, 1, 1, 0.5 ] )
		},

		'corner survives simplification'() {
			const points = [ 0, 0, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0.5 ]
			$mol_assert_equal( $bog_doodle_piece_simplify( points, 0.001 ).length, 9 )
		},

	})

}
