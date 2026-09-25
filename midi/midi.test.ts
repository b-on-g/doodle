namespace $ {

	$mol_test({

		'one note file'() {
			const file = $bog_doodle_midi_file( [ { time: 0, length: 1, midi: 60, velocity: 1, channel: 0 } ], 120, 96 )
			$mol_assert_like( Array.from( file ), [
				0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0, 96,
				0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, 19,
				0, 0xff, 0x51, 3, 0x07, 0xa1, 0x20,
				0, 0x90, 60, 127,
				96, 0x80, 60, 0,
				0, 0xff, 0x2f, 0,
			] )
		},

		'long delta is written as variable length'() {
			const file = $bog_doodle_midi_file( [ { time: 0, length: 2, midi: 64, velocity: 0.5, channel: 1 } ], 60, 480 )
			$mol_assert_like( Array.from( file.slice( -9 ) ), [ 0x87, 0x40, 0x81, 64, 0, 0, 0xff, 0x2f, 0 ] )
		},

	})

}
