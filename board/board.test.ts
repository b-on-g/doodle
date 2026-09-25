namespace $.$$ {

	const pointer = ( x: number, y: number, extra: Partial< PointerEvent > = {} ) => ( {
		pointerId: 1,
		pointerType: 'pen',
		pressure: 0.8,
		button: 0,
		buttons: 1,
		clientX: x,
		clientY: y,
		preventDefault() {},
		... extra,
	} as PointerEvent )

	const board = ( $: $ ) => {
		const board = $bog_doodle_board.make({ $ })
		board.rect = ()=> ( { left: 0, top: 0, width: 100, height: 100 } as DOMRect )
		board.notes = ()=> [ 60, 62, 64, 65, 67, 69, 71, 72 ]
		board.redraw = ()=> {}
		board.axis = ()=> 'time_x'
		return board
	}

	$mol_test({

		'pen stroke becomes a stroke with pressure'( $ ) {
			const view = board( $ )
			view.pointer_down( pointer( 10, 90 ) )
			for( let x = 11; x <= 60; ++x ) view.pointer_move( pointer( x, 90 ) )
			view.pointer_up( pointer( 60, 90 ) )

			const strokes = view.sketch().strokes()
			$mol_assert_equal( strokes.length, 1 )
			$mol_assert_equal( strokes[ 0 ].points[ 2 ], 0.8 )
			$mol_assert_equal( strokes[ 0 ].points.length, 6 )
			$mol_assert_equal( view.note_hover(), null )
		},

		'snap puts the stroke on the row center'( $ ) {
			const view = board( $ )
			view.snap = ()=> true
			view.pointer_down( pointer( 10, 91 ) )
			view.pointer_up( pointer( 10, 91 ) )
			$mol_assert_equal( view.sketch().strokes()[ 0 ].points[ 1 ], $bog_doodle_scale_row_y( 0, 8 ) )
		},

		'eraser removes touched strokes in one undo step'( $ ) {
			const view = board( $ )
			view.sketch().add( { id: 'a', color: 0, points: [ 0.1, 0.5, 0.5, 0.9, 0.5, 0.5 ] } )
			view.sketch().add( { id: 'b', color: 0, points: [ 0.1, 0.2, 0.5, 0.9, 0.2, 0.5 ] } )
			view.tool( 'erase' )
			view.pointer_down( pointer( 50, 50 ) )
			view.pointer_move( pointer( 50, 20 ) )
			view.pointer_up( pointer( 50, 20 ) )
			$mol_assert_equal( view.sketch().strokes().length, 0 )
			view.sketch().undo()
			$mol_assert_equal( view.sketch().strokes().length, 2 )
		},

		'select by box and drag moves strokes'( $ ) {
			const view = board( $ )
			view.sketch().add( { id: 'a', color: 0, points: [ 0.1, 0.5, 0.5, 0.2, 0.5, 0.5 ] } )
			view.sketch().add( { id: 'b', color: 0, points: [ 0.7, 0.5, 0.5, 0.8, 0.5, 0.5 ] } )
			view.tool( 'select' )
			view.pointer_down( pointer( 0, 0 ) )
			view.pointer_move( pointer( 30, 100 ) )
			view.pointer_up( pointer( 30, 100 ) )
			$mol_assert_like( view.selected(), [ 'a' ] )

			view.pointer_down( pointer( 15, 50 ) )
			view.pointer_move( pointer( 25, 40 ) )
			view.pointer_up( pointer( 25, 40 ) )
			const moved = view.sketch().strokes()[ 0 ].points
			$mol_assert_equal( Math.round( moved[ 0 ] * 100 ), 20 )
			$mol_assert_equal( Math.round( moved[ 1 ] * 100 ), 40 )
		},

		'touch pans in pen only mode and pinch zooms'( $ ) {
			const view = board( $ )
			view.pen_only = ()=> true
			view.pointer_down( pointer( 50, 50, { pointerType: 'touch' } ) )
			view.pointer_move( pointer( 40, 50, { pointerType: 'touch' } ) )
			view.pointer_up( pointer( 40, 50, { pointerType: 'touch' } ) )
			$mol_assert_equal( view.sketch().strokes().length, 0 )

			view.pointer_down( pointer( 40, 50, { pointerType: 'touch' } ) )
			view.pointer_down( pointer( 60, 50, { pointerType: 'touch', pointerId: 2 } ) )
			view.pointer_move( pointer( 80, 50, { pointerType: 'touch', pointerId: 2 } ) )
			$mol_assert_equal( Math.round( view.view().zoom * 10 ), 20 )
		},

		'notes run across and time runs down by default'( $ ) {
			const view = board( $ )
			view.axis = ()=> 'time_y'
			view.pointer_down( pointer( 90, 10 ) )
			view.pointer_up( pointer( 90, 10 ) )
			const [ x, y ] = view.sketch().strokes()[ 0 ].points
			$mol_assert_equal( Math.round( x * 100 ), 10 )
			$mol_assert_equal( Math.round( y * 100 ), 10 )
			$mol_assert_equal( $bog_doodle_scale_row( y, 8 ), 7 )
		},

		'board zooms out past the sheet and stays centered'( $ ) {
			const view = board( $ )
			view.zoom_out()
			view.zoom_out()
			view.zoom_out()
			const zoomed = view.view()
			$mol_assert_ok( zoomed.zoom < 1 )
			$mol_assert_equal( zoomed.x, ( 1 - 1 / zoomed.zoom ) / 2 )
			for( let i = 0; i < 20; ++i ) view.zoom_out()
			$mol_assert_equal( view.view().zoom, view.zoom_min() )
			view.zoom_reset()
			$mol_assert_equal( view.zoom_percent(), '100%' )
		},

		'stroke keeps ink, brush size and active layer'( $ ) {
			const view = board( $ )
			view.ink = ()=> '#0066ff'
			view.brush = ()=> 3
			view.layer_order = ()=> [ 'l1', 'l2' ]
			view.layer_active = ()=> 'l2'
			view.pointer_down( pointer( 50, 50 ) )
			view.pointer_up( pointer( 50, 50 ) )
			const stroke = view.sketch().strokes()[ 0 ]
			$mol_assert_equal( stroke.ink, '#0066ff' )
			$mol_assert_equal( stroke.color, 2 )
			$mol_assert_equal( stroke.size, 3 )
			$mol_assert_equal( stroke.layer, 'l2' )
		},

		'eraser touches only the active visible layer'( $ ) {
			const view = board( $ )
			view.sketch().add( { id: 'a', color: 0, points: [ 0.1, 0.5, 0.5, 0.9, 0.5, 0.5 ] } )
			view.sketch().add( { id: 'b', color: 0, layer: 'l2', points: [ 0.1, 0.5, 0.5, 0.9, 0.5, 0.5 ] } )
			view.layer_order = ()=> [ 'l1', 'l2' ]
			view.layer_active = ()=> 'l2'
			view.tool( 'erase' )
			view.pointer_down( pointer( 50, 50 ) )
			view.pointer_up( pointer( 50, 50 ) )
			$mol_assert_like( view.sketch().strokes().map( s => s.id ), [ 'a' ] )
		},

		'bigger eraser reaches farther'( $ ) {
			const view = board( $ )
			view.sketch().add( { id: 'a', color: 0, points: [ 0.1, 0.5, 0.5, 0.9, 0.5, 0.5 ] } )
			view.tool( 'erase' )
			view.eraser = ()=> 10
			view.pointer_down( pointer( 50, 40 ) )
			view.pointer_up( pointer( 50, 40 ) )
			$mol_assert_equal( view.sketch().strokes().length, 1 )
			view.eraser = ()=> 30
			view.pointer_down( pointer( 50, 40 ) )
			view.pointer_up( pointer( 50, 40 ) )
			$mol_assert_equal( view.sketch().strokes().length, 0 )
		},

	})

}
