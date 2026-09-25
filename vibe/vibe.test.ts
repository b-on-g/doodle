namespace $ {

	$mol_test({

		'vibe sets music settings and keeps the drawing'() {
			const piece = { ... $bog_doodle_piece_empty(), title: 'x', patterns: [ [ { id: 'a', color: 0, points: [ 0, 0, 0 ] } ] ] }
			const blues = $bog_doodle_vibe_apply( piece, 'blues' )
			$mol_assert_equal( blues.scale, 'blues' )
			$mol_assert_equal( blues.swing, 1 )
			$mol_assert_equal( blues.title, 'x' )
			$mol_assert_equal( blues.patterns, piece.patterns )
			$mol_assert_equal( $bog_doodle_vibe_current( blues ), 'blues' )
		},

		'hand tuned settings are no vibe'() {
			const piece = { ... $bog_doodle_vibe_apply( $bog_doodle_piece_empty(), 'calm' ), bpm: 73 }
			$mol_assert_equal( $bog_doodle_vibe_current( piece ), '' )
		},

		'vibe ids are unique and every ink has a voice'() {
			const ids = new Set( $bog_doodle_vibe_list.map( v => v.id ) )
			$mol_assert_equal( ids.size, $bog_doodle_vibe_list.length )
			for( const vibe of $bog_doodle_vibe_list ) {
				$mol_assert_ok( $bog_doodle_synth_timbre( vibe.ink ) >= 0 )
			}
		},

	})

}
