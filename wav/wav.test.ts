namespace $ {

	$mol_test({

		'stereo pcm16 header and samples'() {
			const file = $bog_doodle_wav( [ new Float32Array( [ 1, -1 ] ), new Float32Array( [ 0, 2 ] ) ], 8000 )
			const view = new DataView( file.buffer )
			$mol_assert_equal( file.length, 44 + 8 )
			$mol_assert_equal( String.fromCharCode( ... file.slice( 0, 4 ) ), 'RIFF' )
			$mol_assert_equal( view.getUint16( 22, true ), 2 )
			$mol_assert_equal( view.getUint32( 24, true ), 8000 )
			$mol_assert_like(
				[ 0, 1, 2, 3 ].map( i => view.getInt16( 44 + i * 2, true ) ),
				[ 32767, 0, -32768, 32767 ],
			)
		},

	})

}
