namespace $.$$ {

	const at = ( x: number, y: number ) => ( {
		pointerId: 1, clientX: x, clientY: y, preventDefault() {},
	} as PointerEvent )

	const picker = ( $: $ ) => {
		const view = $bog_doodle_picker.make({ $ })
		const rect = ()=> ( { left: 0, top: 0, width: 100, height: 100 } as DOMRect )
		;( view.Area().dom_node() as Element ).getBoundingClientRect = rect
		;( view.Hue().dom_node() as Element ).getBoundingClientRect = rect
		return view
	}

	$mol_test({

		'hex and hsv round trip'() {
			for( const hex of [ '#000000', '#ffffff', '#ff0000', '#2f6fd8', '#8a44c8', '#e39a1b' ] ) {
				const { h, s, v } = $bog_doodle_picker_hsv( hex )
				$mol_assert_equal( $bog_doodle_picker_hex( h, s, v ), hex )
			}
		},

		'area picks saturation and brightness in the current hue'( $ ) {
			const view = picker( $ )
			view.value( '#0000ff' )
			view.area_down( at( 100, 0 ) )
			$mol_assert_equal( view.value(), '#0000ff' )
			view.area_move( at( 0, 0 ) )
			$mol_assert_equal( view.value(), '#ffffff' )
			view.area_move( at( 50, 100 ) )
			$mol_assert_equal( view.value(), '#000000' )
			view.area_up( at( 50, 100 ) )
			$mol_assert_equal( view.hue(), 240 )
		},

		'hue strip turns gray into a color'( $ ) {
			const view = picker( $ )
			view.value( '#808080' )
			view.hue_down( at( 0, 5 ) )
			view.hue_up( at( 0, 5 ) )
			$mol_assert_equal( $bog_doodle_synth_timbre( view.value() ), 1 )
		},

		'hex field accepts only valid colors'( $ ) {
			const view = picker( $ )
			view.value( '#123456' )
			view.hex( 'zz' )
			$mol_assert_equal( view.value(), '#123456' )
			view.hex( 'AABBCC' )
			$mol_assert_equal( view.value(), '#aabbcc' )
		},

	})

}
