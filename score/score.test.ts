namespace $ {

	const notes = [ 60, 62, 64, 65, 67, 69, 71, 72 ]

	$mol_test({

		'horizontal line is one long note'() {
			const events = $bog_doodle_score( [ { id: 'a', color: 2, points: [ 0, 0.94, 1, 0.5, 0.94, 1 ] } ], notes, 8 )
			$mol_assert_like( events, [ { stroke: 'a', color: 2, step: 0, length: 4, midi: 60, velocity: 1 } ] )
		},

		'rising line splits into ascending notes'() {
			const events = $bog_doodle_score( [ { id: 'a', color: 0, points: [ 0, 1, 0, 0.9999, 0, 0 ] } ], notes, 8 )
			$mol_assert_like( events.map( e => e.midi ), notes )
			$mol_assert_like( events.map( e => e.length ), [ 1, 1, 1, 1, 1, 1, 1, 1 ] )
			$mol_assert_equal( events[ 0 ].velocity, 0.25 )
		},

		'dot plays on its step'() {
			const events = $bog_doodle_score( [ { id: 'a', color: 0, points: [ 0.3, 0.06, 0.5 ] } ], notes, 8 )
			$mol_assert_like( events.map( e => [ e.step, e.midi ] ), [ [ 2, 72 ] ] )
		},

		'vertical stroke inside a step is a chord'() {
			const events = $bog_doodle_score( [ { id: 'a', color: 0, points: [ 0.51, 0.94, 0.5, 0.51, 0.69, 0.5 ] } ], notes, 8 )
			$mol_assert_like( events.map( e => [ e.step, e.midi ] ), [ [ 4, 60 ], [ 4, 62 ], [ 4, 64 ] ] )
		},

		'swing delays only offbeats of straight grids'() {
			$mol_assert_equal( $bog_doodle_score_time( 2, 8, 2, 0.5 ), 0.5 )
			$mol_assert_equal( $bog_doodle_score_time( 1, 8, 2, 0.75 ), 0.25 + 0.0625 )
			$mol_assert_equal( $bog_doodle_score_time( 1, 12, 3, 1 ), 0.25 )
		},

	})

}
