namespace $ {

	$mol_test({

		'palette colors keep their instruments'() {
			$mol_assert_like(
				$bog_doodle_synth_colors.map( c => $bog_doodle_synth_timbre( c.ink ) ),
				[ 0, 1, 2, 3, 4, 5 ],
			)
		},

		'any color maps to an instrument by hue'() {
			$mol_assert_equal( $bog_doodle_synth_timbre( '#808080' ), 0 )
			$mol_assert_equal( $bog_doodle_synth_timbre( '#ff0000' ), 1 )
			$mol_assert_equal( $bog_doodle_synth_timbre( '#ffee00' ), 4 )
			$mol_assert_equal( $bog_doodle_synth_timbre( '#00ff66' ), 3 )
			$mol_assert_equal( $bog_doodle_synth_timbre( '#0066ff' ), 2 )
			$mol_assert_equal( $bog_doodle_synth_timbre( '#ff00ff' ), 5 )
		},

		'stroke ink falls back to its palette color'() {
			$mol_assert_equal( $bog_doodle_synth_ink( { color: 2 } ), '#2f6fd8' )
			$mol_assert_equal( $bog_doodle_synth_ink( { color: 2, ink: '#123456' } ), '#123456' )
		},

	})

}
