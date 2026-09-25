namespace $ {

	$mol_test({

		'create, save, switch and remove pieces'( $ ) {
			const gallery = $bog_doodle_gallery.make({ $ })
			$mol_assert_equal( gallery.current(), '' )

			const first = gallery.create()
			const second = gallery.create( { ... $bog_doodle_piece_empty(), title: 'Второй' } )
			$mol_assert_like( gallery.ids(), [ second, first ] )
			$mol_assert_equal( gallery.current(), second )
			$mol_assert_equal( gallery.piece( second ).title, 'Второй' )

			gallery.save( first, { ... $bog_doodle_piece_empty(), bpm: 150 } )
			$mol_assert_equal( gallery.piece( first ).bpm, 150 )

			gallery.remove( second )
			$mol_assert_like( gallery.ids(), [ first ] )
			$mol_assert_equal( gallery.current(), first )
		},

	})

}
