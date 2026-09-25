namespace $ {

	$mol_test({

		'C major over one octave ends on the upper tonic'() {
			$mol_assert_like( $bog_doodle_scale_notes( 0, 'major', 4, 1 ), [ 60, 62, 64, 65, 67, 69, 71, 72 ] )
		},

		'A minor pentatonic over two octaves'() {
			const notes = $bog_doodle_scale_notes( 9, 'minor_penta', 3, 2 )
			$mol_assert_equal( notes.length, 11 )
			$mol_assert_equal( notes[ 0 ], 57 )
			$mol_assert_equal( notes[ 10 ], 81 )
		},

		'top of the canvas is the highest row'() {
			$mol_assert_equal( $bog_doodle_scale_row( 0, 8 ), 7 )
			$mol_assert_equal( $bog_doodle_scale_row( 1, 8 ), 0 )
			$mol_assert_equal( $bog_doodle_scale_row( 0.5, 8 ), 4 )
		},

		'row center maps back to the same row'() {
			for( let row = 0; row < 8; ++row ) {
				$mol_assert_equal( $bog_doodle_scale_row( $bog_doodle_scale_row_y( row, 8 ), 8 ), row )
			}
		},

		'note names and frequencies'() {
			$mol_assert_equal( $bog_doodle_scale_name( 60 ), 'C4' )
			$mol_assert_equal( $bog_doodle_scale_name( 70 ), 'B♭4' )
			$mol_assert_equal( $bog_doodle_scale_freq( 69 ), 440 )
			$mol_assert_equal( Math.round( $bog_doodle_scale_freq( 81 ) ), 880 )
		},

	})

}
