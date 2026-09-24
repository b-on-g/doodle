namespace $ {

	$mol_test({

		'app shows intro in body'() {
			const app = new $bog_doodle_app
			$mol_assert_equal( app.body()[ 0 ], app.Intro() )
		},

	})

}
