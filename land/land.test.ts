namespace $.$$ {

	$mol_test({

		'every call to action leads to the app'( $ ) {
			const land = $bog_doodle_land.make({ $ })
			for( const link of [ land.Nav_open(), land.Hero_open(), land.Final_open() ] ) {
				$mol_assert_equal( link.uri(), 'app/' )
			}
		},

		'how it works anchor exists'( $ ) {
			const land = $bog_doodle_land.make({ $ })
			$mol_assert_equal( land.Hero_how().uri(), '#how' )
			$mol_assert_equal( ( land.How().attr() as Record< string, unknown > ).id, 'how' )
		},

	})

}
