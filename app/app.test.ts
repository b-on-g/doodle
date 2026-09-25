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

	let sounded = [] as number[]

	const app = ( $: $ ) => {
		sounded = []
		const app = $bog_doodle_app.make({ $ })
		const board = app.Board() as $bog_doodle_board
		board.rect = ()=> ( { left: 0, top: 0, width: 100, height: 100 } as DOMRect )
		board.redraw = ()=> {}
		app.note_sound = ( midi: number )=> { sounded.push( midi ) }
		return app
	}

	const draw = ( app: $bog_doodle_app, y: number ) => {
		const board = app.Board() as $bog_doodle_board
		board.pointer_down( pointer( 100 - y, 10 ) )
		board.pointer_move( pointer( 100 - y, 40 ) )
		board.pointer_up( pointer( 100 - y, 40 ) )
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
			$mol_assert_equal( view.pattern(), 1 )
			$mol_assert_equal( view.piece().patterns[ 1 ].length, 1 )
			view.chain( true )
			$mol_assert_equal( view.pattern(), 1 )
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

		'vibe tunes music and brush in one tap'( $ ) {
			const view = app( $ )
			view.vibe_checked( 'blues', true )
			$mol_assert_equal( view.piece().scale, 'blues' )
			$mol_assert_equal( view.piece().swing, 1 )
			$mol_assert_ok( view.Vibe( 'blues' ).checked() )
			$mol_assert_not( view.Vibe( 'calm' ).checked() )
			$mol_assert_equal( view.voice_name(), $bog_doodle_synth_colors[ 1 ].name )
			view.bpm_value( 93 )
			$mol_assert_not( view.Vibe( 'blues' ).checked() )
		},

		'any color draws with the instrument of its hue'( $ ) {
			const view = app( $ )
			view.ink( '#33cc99' )
			draw( view, 50 )
			const stroke = view.piece().patterns[ 0 ][ 0 ]
			$mol_assert_equal( stroke.ink, '#33cc99' )
			$mol_assert_equal( stroke.color, 3 )
			$mol_assert_like( view.ink_recent(), [ '#33cc99' ] )
		},

		'brush size goes into the stroke and slider follows the tool'( $ ) {
			const view = app( $ )
			view.brush_value( 25 )
			draw( view, 50 )
			$mol_assert_equal( view.piece().patterns[ 0 ][ 0 ].size, 2.5 )
			$mol_assert_like( view.size_tools(), [ view.Brush_size() ] )
			view.tool_erase( true )
			$mol_assert_like( view.size_tools(), [ view.Eraser_size() ] )
			view.size_step( 1 )
			$mol_assert_equal( view.eraser(), 30 )
		},

		'layers: draw on the new one, hide it, mute it, drop it'( $ ) {
			const view = app( $ )
			draw( view, 90 )
			view.layer_add()
			const top = view.layer_active()
			$mol_assert_equal( view.layers().length, 2 )
			$mol_assert_equal( view.layer_rows()[ 0 ], view.Layer( top ) )
			draw( view, 20 )
			$mol_assert_equal( view.piece().patterns[ 0 ][ 1 ].layer, top )

			view.layer_visible( top, false )
			$mol_assert_like( view.layer_order(), [ view.layer_default() ] )
			$mol_assert_equal( view.Player().midi_notes().length, 2 )

			view.layer_name( 'Мелодия' )
			$mol_assert_equal( view.layer_title( top ), 'Мелодия' )

			view.layer_drop( top )
			$mol_assert_equal( view.layers().length, 1 )
			$mol_assert_equal( view.piece().patterns[ 0 ].length, 1 )
			$mol_assert_equal( view.layer_active(), view.layer_default() )
		},

		'moving the bottom layer up keeps its strokes'( $ ) {
			const view = app( $ )
			draw( view, 90 )
			const bottom = view.layer_default()
			view.layer_add()
			view.layer_up( bottom )
			$mol_assert_equal( view.layers()[ 1 ].id, bottom )
			$mol_assert_equal( view.piece().patterns[ 0 ][ 0 ].layer, bottom )
		},

		'zoom buttons and axis setting'( $ ) {
			const view = app( $ )
			view.zoom_out()
			$mol_assert_equal( view.zoom_percent(), '80%' )
			view.zoom_reset()
			$mol_assert_equal( view.axis(), 'time_y' )
			view.axis_value( 'time_x' )
			$mol_assert_equal( ( view.Board() as $bog_doodle_board ).axis(), 'time_x' )
		},

		'drawing is silent until the setting is on'( $ ) {
			const view = app( $ )
			$mol_assert_not( view.draw_sound() )
			draw( view, 50 )
			$mol_assert_equal( sounded.length, 0 )
			view.draw_sound( true )
			draw( view, 50 )
			$mol_assert_ok( sounded.length > 0 )
		},

		'chain playback drags the editor to the playing pattern'( $ ) {
			const view = app( $ )
			draw( view, 90 )
			view.pattern_add()
			view.pattern_checked( 0, true )
			view.Player().playhead = ()=> ( { pattern: 1, x: 0.5 } )
			$mol_assert_equal( view.playhead(), null )
			$mol_assert_equal( view.pattern(), 0 )
			view.chain( true )
			$mol_assert_equal( view.playhead(), 0.5 )
			$mol_assert_equal( view.pattern(), 1 )
		},

		'title lives in the top bar'( $ ) {
			const view = app( $ )
			$mol_assert_ok( view.Bar().sub().includes( view.Title_input() ) )
			view.Title_input().value( 'Дождь' )
			$mol_assert_equal( view.piece().title, 'Дождь' )
		},

	})

}
