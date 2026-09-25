namespace $.$$ {

	$mol_test({

		'slider writes the picked number'( $ ) {
			const slider = $bog_doodle_slider.make({ $ })
			slider.changed( { target: { value: '42' } } as unknown as Event )
			$mol_assert_equal( slider.value(), 42 )
			$mol_assert_equal( slider.value_text(), '42' )
		},

	})

}
