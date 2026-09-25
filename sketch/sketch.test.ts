namespace $ {

	const line = ( id: string, x1: number, y1: number, x2: number, y2: number ): $bog_doodle_sketch_stroke => ( {
		id, color: 0, points: [ x1, y1, 0.5, x2, y2, 0.5 ],
	} )

	$mol_test({

		'draw, undo and redo'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0, 0, 1, 1 ) )
			sketch.add( line( 'b', 0, 1, 1, 0 ) )
			$mol_assert_equal( sketch.strokes().length, 2 )

			sketch.undo()
			$mol_assert_like( sketch.strokes().map( s => s.id ), [ 'a' ] )
			$mol_assert_ok( sketch.redo_enabled() )

			sketch.redo()
			$mol_assert_like( sketch.strokes().map( s => s.id ), [ 'a', 'b' ] )
			$mol_assert_not( sketch.redo_enabled() )
		},

		'new stroke after undo drops the redo branch'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0, 0, 1, 1 ) )
			sketch.undo()
			sketch.add( line( 'c', 0, 0, 1, 0 ) )
			$mol_assert_not( sketch.redo_enabled() )
			$mol_assert_like( sketch.strokes().map( s => s.id ), [ 'c' ] )
		},

		'eraser hits a stroke between its points'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0.1, 0.5, 0.9, 0.5 ) )
			sketch.add( line( 'b', 0.1, 0.1, 0.9, 0.1 ) )
			$mol_assert_like( sketch.hits( 0.5, 0.51, 0.02 ), [ 'a' ] )
			sketch.remove( sketch.hits( 0.5, 0.51, 0.02 ) )
			$mol_assert_like( sketch.strokes().map( s => s.id ), [ 'b' ] )
		},

		'select by box, move and copy'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0.1, 0.5, 0.2, 0.5 ) )
			sketch.add( line( 'b', 0.7, 0.5, 0.8, 0.5 ) )
			const picked = sketch.inside( 0, 0, 0.3, 1 )
			$mol_assert_like( picked, [ 'a' ] )

			sketch.shift( picked, 0.1, -0.1 )
			$mol_assert_like( sketch.strokes()[ 0 ].points, [ 0.2, 0.4, 0.5, 0.30000000000000004, 0.4, 0.5 ] )

			const copies = sketch.copy( picked, 0.5, 0 )
			$mol_assert_equal( sketch.strokes().length, 3 )
			$mol_assert_unique( copies[ 0 ], 'a' )
		},

	})

}
