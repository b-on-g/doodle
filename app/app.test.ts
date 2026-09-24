namespace $ {

	$mol_test({

		'app has title'() {
			const app = new $bog_doodle_app
			$mol_assert_equal( app.title(), 'Doodle' )
		},

	})

}
