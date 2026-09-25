namespace $.$$ {

	const pointer = ( x: number, y: number ) => ( {
		pointerId: 1,
		pointerType: 'mouse',
		pressure: 0.5,
		button: 0,
		buttons: 1,
		clientX: x,
		clientY: y,
		preventDefault() {},
	} as PointerEvent )

	const app = ( $: $ ) => {
		const app = $bog_doodle_app.make({ $ })
		const board = app.Board() as $bog_doodle_board
		board.rect = ()=> ( { left: 0, top: 0, width: 100, height: 100 } as DOMRect )
		board.redraw = ()=> {}
		app.note_preview = ( next?: number | null )=> next ?? null
		return app
	}

	const draw = ( app: $bog_doodle_app, y: number ) => {
		const board = app.Board() as $bog_doodle_board
		board.pointer_down( pointer( 10, y ) )
		board.pointer_move( pointer( 40, y ) )
		board.pointer_up( pointer( 40, y ) )
	}

	$mol_test({

		'first stroke creates a piece in the gallery'( $ ) {
			const view = app( $ )
			$mol_assert_equal( view.Store().ids().length, 0 )
			draw( view, 90 )
			$mol_assert_equal( view.Store().ids().length, 1 )
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 1 )
			$mol_assert_ok( view.undo_enabled() )

			view.undo()
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 0 )
		},

		'color picks the timbre of the next stroke'( $ ) {
			const view = app( $ )
			view.color_checked( 3, true )
			draw( view, 50 )
			$mol_assert_equal( view.piece().patterns[ 0 ][ 0 ].color, 3 )
			$mol_assert_ok( view.Color( 3 ).checked() )
		},

		'patterns: add, draw separately, chain'( $ ) {
			const view = app( $ )
			draw( view, 90 )
			view.pattern_add()
			$mol_assert_equal( view.pattern(), 1 )
			$mol_assert_equal( view.pattern_tabs().length, 3 )
			$mol_assert_equal( view.sketch().strokes().length, 0 )
			draw( view, 20 )
			view.chain( true )
			const notes = view.Player().midi_notes()
			$mol_assert_equal( notes.length, 2 )
			$mol_assert_ok( notes[ 1 ].midi > notes[ 0 ].midi )

			view.pattern_drop()
			$mol_assert_equal( view.pattern(), 0 )
			$mol_assert_equal( view.piece().patterns.length, 1 )
		},

		'settings change the grid'( $ ) {
			const view = app( $ )
			view.grid_value( '16' )
			view.bars_value( '1' )
			$mol_assert_equal( view.steps(), 16 )
			view.scale_value( 'blues' )
			view.range_value( '1' )
			$mol_assert_equal( view.notes().length, 7 )
		},

		'share link opens the same piece'( $ ) {
			const view = app( $ )
			view.piece_title( 'Ручей' )
			draw( view, 60 )
			const link = view.share_link()
			const share = link.match( /share=([^/]*)/ )![ 1 ]
			$mol_assert_equal( $bog_doodle_piece_unpack( decodeURIComponent( share ) ).title, 'Ручей' )
			$.$mol_state_arg.dict( {} )
		},

		'gallery keeps pieces apart'( $ ) {
			const view = app( $ )
			draw( view, 90 )
			const first = view.Store().current()
			view.piece_new()
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 0 )
			draw( view, 30 )
			view.piece_open( first )
			$mol_assert_equal( view.Store().current(), first )
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 1 )
			$mol_assert_equal( view.gallery_rows().length, 3 )
		},

		'selection tools appear with selection'( $ ) {
			const view = app( $ )
			draw( view, 50 )
			$mol_assert_equal( view.selection_tools().length, 0 )
			view.tool_select( true )
			const board = view.Board()
			board.pointer_down( pointer( 0, 0 ) )
			board.pointer_move( pointer( 100, 100 ) )
			board.pointer_up( pointer( 100, 100 ) )
			$mol_assert_equal( view.selection_tools().length, 2 )
			view.selection_copy()
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 2 )
			view.selection_drop()
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 1 )
		},

	})

}
