namespace $ {

	const piece = ( chain: boolean ): $bog_doodle_piece => ( {
		... $bog_doodle_piece_empty(),
		key: 0,
		scale: 'major',
		octave: 4,
		range: 1,
		bars: 1,
		grid: '8',
		chain,
		patterns: [
			[ { id: 'a', color: 0, points: [ 0, 0.94, 0.5, 0.25, 0.94, 0.5 ] } ],
			[ { id: 'b', color: 2, points: [ 0.5, 0.06, 1, 0.75, 0.06, 1 ] } ],
		],
	} )

	$mol_test({

		'only the edited pattern plays without chain'( $ ) {
			const player = $bog_doodle_player.make({ $, piece: ()=> piece( false ), pattern: ()=> 1 })
			$mol_assert_like( player.midi_notes(), [ { time: 2, length: 1, midi: 72, velocity: 1, channel: 2 } ] )
		},

		'every layer sounds, hidden too'( $ ) {
			const layered = {
				... piece( true ),
				layers: [
					{ id: 'l1', name: '', visible: true },
					{ id: 'l2', name: '', visible: false },
				],
			}
			layered.patterns = [ [ layered.patterns[ 0 ][ 0 ], { ... layered.patterns[ 1 ][ 0 ], layer: 'l2' } ] ]
			const player = $bog_doodle_player.make({ $, piece: ()=> layered, pattern: ()=> 0 })
			$mol_assert_like( player.midi_notes().map( n => n.midi ), [ 60, 72 ] )
		},

		'chain starts from the active pattern and wraps around'( $ ) {
			const three = { ... piece( true ), patterns: [ ... piece( true ).patterns, [] ] }
			const player = $bog_doodle_player.make({ $, piece: ()=> three, pattern: ()=> 1 })
			player.from = 1
			$mol_assert_like( player.order(), [ 1, 2, 0 ] )
			$mol_assert_like( player.order( 0 ), [ 0, 1, 2 ] )
		},

		'chain plays patterns one after another'( $ ) {
			const player = $bog_doodle_player.make({ $, piece: ()=> piece( true ), pattern: ()=> 1 })
			$mol_assert_like( player.midi_notes().map( n => [ n.time, n.midi ] ), [ [ 0, 60 ], [ 6, 72 ] ] )
		},

		'voice budget refuses notes beyond the limit and frees ended ones'( $ ) {
			const player = $bog_doodle_player.make({ $, piece: ()=> piece( false ) })
			player.max_voices = ()=> 2
			$mol_assert_ok( player.voice_take( 0, 1 ) )
			$mol_assert_ok( player.voice_take( 0, 2 ) )
			$mol_assert_not( player.voice_take( 0.5, 3 ) )
			$mol_assert_ok( player.voice_take( 1.5, 3 ) )
		},

		'after a stall missed steps are skipped, not played in a burst'( $ ) {
			const player = $bog_doodle_player.make({ $, piece: ()=> ( { ... piece( false ), bpm: 120, bars: 1, grid: '8' } ) })
			player.base = 1
			player.step = 0
			$mol_assert_equal( player.catch_up( 0.5 ), 0 )
			$mol_assert_equal( player.catch_up( 1.6 ), 3 )
			$mol_assert_equal( player.step, 3 )
			$mol_assert_ok( player.base > 1.6 )
		},

		'weak devices get fewer voices'( $ ) {
			const player = $bog_doodle_player.make({ $, piece: ()=> piece( false ) })
			player.weak = ()=> true
			$mol_assert_equal( player.step_voices(), 6 )
			$mol_assert_equal( player.max_voices(), 16 )
		},

	})

}
