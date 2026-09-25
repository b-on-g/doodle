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

		'eraser cuts a hole in the middle of a line'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0.1, 0.5, 0.9, 0.5 ) )
			const next = sketch.erased( 0.5, 0.5, 0.05, ()=> true )
			$mol_assert_equal( next.length, 2 )
			const [ left, right ] = next
			$mol_assert_ok( Math.max( ... left.points.filter( ( _, i ) => i % 3 === 0 ) ) < 0.46 )
			$mol_assert_ok( Math.min( ... right.points.filter( ( _, i ) => i % 3 === 0 ) ) > 0.54 )
			$mol_assert_equal( sketch.strokes().length, 1 )
		},

		'eraser removes a dot and leaves far lines untouched'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( { id: 'dot', color: 0, points: [ 0.5, 0.5, 0.5 ] } )
			sketch.add( line( 'far', 0.1, 0.1, 0.9, 0.1 ) )
			const next = sketch.erased( 0.5, 0.5, 0.05, ()=> true )
			$mol_assert_like( next.map( s => s.id ), [ 'far' ] )
			$mol_assert_equal( next[ 0 ], sketch.strokes()[ 1 ] )
		},

		'lasso picks the part of a line inside the loop'( $ ) {
			const sketch = $bog_doodle_sketch.make({ $ })
			sketch.add( line( 'a', 0.1, 0.5, 0.9, 0.5 ) )
			sketch.add( line( 'b', 0.1, 0.9, 0.9, 0.9 ) )
			const picked = sketch.lasso( [ 0.4, 0.4, 0.6, 0.4, 0.6, 0.6, 0.4, 0.6 ], ()=> true )
			$mol_assert_equal( picked.length, 1 )
			$mol_assert_equal( sketch.strokes().length, 4 )
			const part = sketch.strokes().find( s => s.id === picked[ 0 ] )!
			const xs = part.points.filter( ( _, i ) => i % 3 === 0 )
			$mol_assert_ok( Math.min( ... xs ) >= 0.4 && Math.max( ... xs ) <= 0.6 )
			sketch.undo()
			$mol_assert_equal( sketch.strokes().length, 2 )
		},

		'point in polygon'() {
			const square = [ 0, 0, 1, 0, 1, 1, 0, 1 ]
			$mol_assert_ok( $bog_doodle_sketch_polygon_has( square, 0.5, 0.5 ) )
			$mol_assert_not( $bog_doodle_sketch_polygon_has( square, 1.5, 0.5 ) )
		},

	})

}
