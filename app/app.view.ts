namespace $.$$ {

	export class $bog_doodle_app extends $.$bog_doodle_app {

		@ $mol_mem
		Player() {
			return $bog_doodle_player.make({
				$: this.$,
				piece: ()=> this.piece(),
				pattern: ()=> this.pattern(),
				click: ()=> this.click(),
			})
		}

		@ $mol_mem
		share() {
			return this.$.$mol_state_arg.value( 'share' ) ?? ''
		}

		@ $mol_mem
		piece( next?: $bog_doodle_piece ): $bog_doodle_piece {
			const store = this.Store()
			const share = this.share()
			if( next === undefined ) {
				if( share ) {
					try {
						return $bog_doodle_piece_unpack( share )
					} catch {
						return $bog_doodle_piece_empty()
					}
				}
				const id = store.current()
				return id ? store.piece( id ) : $bog_doodle_piece_empty()
			}
			if( share || !store.current() ) {
				store.create( next )
				this.$.$mol_state_arg.value( 'share', null )
				return next
			}
			store.save( store.current(), next )
			return next
		}

		piece_patch( patch: Partial< $bog_doodle_piece > ) {
			this.piece( { ... this.piece(), ... patch } )
		}

		@ $mol_mem
		pattern( next?: number ): number {
			const count = this.piece().patterns.length
			return Math.max( 0, Math.min( count - 1, next ?? 0 ) )
		}

		strokes( pattern: number, next?: $bog_doodle_sketch_strokes ) {
			const piece = this.piece()
			if( next === undefined ) return piece.patterns[ pattern ] ?? []
			const patterns = piece.patterns.slice()
			patterns[ pattern ] = next
			this.piece_patch( { patterns } )
			return next
		}

		@ $mol_mem
		session( next?: number ) {
			return next ?? 0
		}

		sketch_key() {
			return this.session() + '/' + this.pattern()
		}

		@ $mol_mem_key
		Sketch( key: string ) {
			const pattern = Number( key.split( '/' )[ 1 ] )
			return $bog_doodle_sketch.make({
				$: this.$,
				strokes: ( next?: $bog_doodle_sketch_strokes ) => this.strokes( pattern, next ),
			})
		}

		sketch() {
			return this.Sketch( this.sketch_key() )
		}

		undo_enabled() {
			return this.sketch().undo_enabled()
		}

		redo_enabled() {
			return this.sketch().redo_enabled()
		}

		undo() {
			this.sketch().undo()
			this.selected( [] )
		}

		redo() {
			this.sketch().redo()
			this.selected( [] )
		}

		notes() {
			return this.Player().notes()
		}

		steps() {
			return this.Player().steps()
		}

		beat_steps() {
			return this.Player().steps_per_bar() / 4
		}

		bar_steps() {
			return this.Player().steps_per_bar()
		}

		playing() {
			return this.Player().playing()
		}

		playhead() {
			const head = this.Player().playhead()
			return head && head.pattern === this.pattern() ? head.x : null
		}

		play_toggle() {
			this.Player().toggle()
		}

		play_icon() {
			return [ this.playing() ? this.Stop_icon() : this.Play_icon() ]
		}

		pref< Value >( key: string, next: Value | undefined, fallback: Value ): Value {
			return this.$.$mol_state_local.value( 'bog_doodle_' + key, next ) ?? fallback
		}

		@ $mol_mem
		tool( next?: string ) {
			return this.pref( 'tool', next, 'draw' )
		}

		tool_set( tool: string, next?: boolean ) {
			if( next ) {
				this.tool( tool )
				if( tool !== 'select' ) this.selected( [] )
			}
			return this.tool() === tool
		}

		tool_draw( next?: boolean ) {
			return this.tool_set( 'draw', next )
		}

		tool_erase( next?: boolean ) {
			return this.tool_set( 'erase', next )
		}

		tool_select( next?: boolean ) {
			return this.tool_set( 'select', next )
		}

		tool_pan( next?: boolean ) {
			return this.tool_set( 'pan', next )
		}

		zoom_reset() {
			( this.Board() as $bog_doodle_board ).zoom_reset()
		}

		@ $mol_mem
		color( next?: number ) {
			return this.pref( 'color', next, 0 )
		}

		palette() {
			return $bog_doodle_synth_colors.map( ( _, index ) => this.Color( index ) )
		}

		color_name( index: number ) {
			return $bog_doodle_synth_colors[ index ].name
		}

		color_ink( index: number ) {
			return $bog_doodle_synth_colors[ index ].ink
		}

		color_checked( index: number, next?: boolean ) {
			if( next ) {
				this.color( index )
				if( this.tool() !== 'draw' ) this.tool( 'draw' )
				const selected = this.selected()
				if( selected.length ) this.recolor( selected, index )
			}
			return this.color() === index
		}

		recolor( ids: readonly string[], color: number ) {
			const picked = new Set( ids )
			const sketch = this.sketch()
			sketch.commit( sketch.strokes().map( s => picked.has( s.id ) ? { ... s, color } : s ) )
		}

		@ $mol_mem
		selected( next?: readonly string[] ): readonly string[] {
			this.sketch_key()
			return next ?? []
		}

		selection_tools() {
			return this.selected().length ? [ this.Copy(), this.Drop() ] : []
		}

		selection_copy() {
			this.selected( this.sketch().copy( this.selected(), 0.02, -0.02 ) )
		}

		selection_drop() {
			this.sketch().remove( this.selected() )
			this.selected( [] )
		}

		pattern_tabs() {
			return [ ... this.piece().patterns.map( ( _, index ) => this.Pattern( index ) ), this.Pattern_add() ]
		}

		pattern_title( index: number ) {
			return String( index + 1 )
		}

		pattern_checked( index: number, next?: boolean ) {
			if( next ) {
				this.pattern( index )
				this.selected( [] )
			}
			return this.pattern() === index
		}

		pattern_add() {
			this.piece_patch( { patterns: [ ... this.piece().patterns, [] ] } )
			this.pattern( this.piece().patterns.length - 1 )
		}

		pattern_copy() {
			const patterns = this.piece().patterns.slice()
			const index = this.pattern()
			patterns.splice( index + 1, 0, patterns[ index ].map( s => ( { ... s, id: $bog_doodle_sketch_stroke_id() } ) ) )
			this.piece_patch( { patterns } )
			this.pattern( index + 1 )
		}

		pattern_clear() {
			this.sketch().clear()
			this.selected( [] )
		}

		pattern_drop_enabled() {
			return this.piece().patterns.length > 1
		}

		pattern_drop() {
			const patterns = this.piece().patterns.slice()
			if( patterns.length < 2 ) return
			patterns.splice( this.pattern(), 1 )
			this.piece_patch( { patterns } )
			this.pattern( this.pattern() - 1 )
		}

		@ $mol_mem
		panel( next?: string ) {
			return next ?? ''
		}

		settings_opened( next?: boolean ) {
			if( next !== undefined ) this.panel( next ? 'settings' : '' )
			return this.panel() === 'settings'
		}

		gallery_opened( next?: boolean ) {
			if( next !== undefined ) this.panel( next ? 'gallery' : '' )
			return this.panel() === 'gallery'
		}

		main() {
			return this.panel() ? [ this.Board(), this.Panel() ] : [ this.Board() ]
		}

		panel_rows() {
			return [ this.panel() === 'gallery' ? this.Gallery() : this.Settings() ]
		}

		piece_title( next?: string ) {
			if( next !== undefined ) this.piece_patch( { title: next } )
			return this.piece().title
		}

		key_options() {
			return Object.fromEntries( $bog_doodle_scale_keys.map( ( name, index ) => [ String( index ), name ] ) )
		}

		key_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { key: Number( next ) } )
			return String( this.piece().key )
		}

		scale_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { scale: next as $bog_doodle_scale_id } )
			return this.piece().scale
		}

		range_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { range: Number( next ) } )
			return String( this.piece().range )
		}

		octave_value( next?: number ) {
			if( next !== undefined && next >= 1 && next <= 6 ) this.piece_patch( { octave: Math.round( next ) } )
			return this.piece().octave
		}

		bpm_value( next?: number ) {
			if( next !== undefined && next >= 30 && next <= 300 ) this.piece_patch( { bpm: Math.round( next ) } )
			return this.piece().bpm
		}

		bars_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { bars: Number( next ) } )
			return String( this.piece().bars )
		}

		grid_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { grid: next as $bog_doodle_score_grid } )
			return this.piece().grid
		}

		swing_value( next?: string ) {
			if( next !== undefined ) this.piece_patch( { swing: Number( next ) } )
			return String( this.piece().swing )
		}

		chain( next?: boolean ) {
			if( next !== undefined ) this.piece_patch( { chain: next } )
			return this.piece().chain
		}

		taps = [] as number[]

		tap() {
			const now = Date.now()
			this.taps = [ ... this.taps.filter( time => now - time < 3000 ), now ].slice( -5 )
			if( this.taps.length < 2 ) return
			const gap = ( this.taps[ this.taps.length - 1 ] - this.taps[ 0 ] ) / ( this.taps.length - 1 )
			this.bpm_value( Math.round( 60000 / gap ) )
		}

		@ $mol_mem
		click( next?: boolean ) {
			return this.pref( 'click', next, false )
		}

		@ $mol_mem
		snap( next?: boolean ) {
			return this.pref( 'snap', next, false )
		}

		@ $mol_mem
		pen_only( next?: boolean ) {
			return this.pref( 'pen_only', next, false )
		}

		@ $mol_mem
		midi_in( next?: boolean ) {
			return this.pref( 'midi_in', next, false )
		}

		last_note = null as number | null

		note_preview( next?: number | null ) {
			if( next !== undefined ) {
				if( next !== null && next !== this.last_note && !this.playing() ) this.Player().live( this.color(), next, 0.5, 0.25 )
				this.last_note = next
			}
			return this.last_note
		}

		back_id() {
			return this.share() ? '' : this.Store().current()
		}

		back( next?: string ) {
			const id = this.back_id()
			if( !id ) return ''
			return this.Store().back( id, next )
		}

		back_enabled() {
			return Boolean( this.back() )
		}

		back_drop() {
			this.back( '' )
		}

		back_files( next?: readonly File[] ) {
			const file = next?.[ 0 ]
			if( file ) this.back_load( file )
			return []
		}

		back_load( file: File ) {
			if( !this.back_id() ) this.piece( this.piece() )
			const win = this.$.$mol_dom_context
			const url = win.URL.createObjectURL( file )
			const image = new ( win as any ).Image as HTMLImageElement
			image.onload = ()=> {
				const scale = Math.min( 1, 1024 / Math.max( image.naturalWidth, image.naturalHeight ) )
				const canvas = win.document.createElement( 'canvas' )
				canvas.width = Math.round( image.naturalWidth * scale )
				canvas.height = Math.round( image.naturalHeight * scale )
				canvas.getContext( '2d' )!.drawImage( image, 0, 0, canvas.width, canvas.height )
				win.URL.revokeObjectURL( url )
				this.back( canvas.toDataURL( 'image/jpeg', 0.7 ) )
			}
			image.src = url
		}

		share_link() {
			const link = this.$.$mol_state_arg.link( { share: $bog_doodle_piece_pack( this.piece() ) } )
			return new URL( link, this.$.$mol_dom_context.location.href ).toString()
		}

		file_name( ext: string ) {
			const title = this.piece().title.trim() || 'doodle'
			return title.replace( /[\\/:*?"<>|]+/g, '_' ) + '.' + ext
		}

		download( blob: Blob, ext: string ) {
			const win = this.$.$mol_dom_context
			const link = win.document.createElement( 'a' )
			link.href = win.URL.createObjectURL( blob )
			link.download = this.file_name( ext )
			link.click()
			new this.$.$mol_after_timeout( 1000, ()=> win.URL.revokeObjectURL( link.href ) )
		}

		export_png() {
			( this.Board() as $bog_doodle_board ).export_canvas().toBlob( ( blob: Blob | null ) => blob && this.download( blob, 'png' ), 'image/png' )
		}

		export_wav() {
			this.Player().render( this.piece().chain ? 1 : 2 ).then( bytes => this.download( new Blob( [ bytes ], { type: 'audio/wav' } ), 'wav' ) )
		}

		export_midi() {
			const bytes = $bog_doodle_midi_file( this.Player().midi_notes(), this.piece().bpm )
			this.download( new Blob( [ bytes ], { type: 'audio/midi' } ), 'mid' )
		}

		gallery_rows() {
			return [ this.Gallery_new(), ... this.Store().ids().map( id => this.Piece( id ) ) ]
		}

		piece_name( id: string ) {
			return this.Store().piece( id ).title.trim() || this.untitled()
		}

		piece_info( id: string ) {
			const piece = this.Store().piece( id )
			const strokes = piece.patterns.reduce( ( sum, list ) => sum + list.length, 0 )
			const stamp = this.Store().stamp( id )
			const date = stamp ? new Date( stamp ).toLocaleDateString() : ''
			return [ `${ $bog_doodle_scale_keys[ piece.key ] } · ${ strokes } · ${ piece.bpm } bpm`, date ].filter( Boolean ).join( ' · ' )
		}

		piece_open( id: string ) {
			this.Player().stop()
			this.$.$mol_state_arg.value( 'share', null )
			this.Store().current( id )
			this.session( this.session() + 1 )
			this.pattern( 0 )
			this.panel( '' )
		}

		piece_new() {
			this.Player().stop()
			this.$.$mol_state_arg.value( 'share', null )
			this.Store().create()
			this.session( this.session() + 1 )
			this.pattern( 0 )
			this.panel( '' )
		}

		piece_drop( id: string ) {
			if( id === this.Store().current() ) this.session( this.session() + 1 )
			this.Store().remove( id )
		}

		@ $mol_mem
		hotkeys() {
			return new this.$.$mol_dom_listener( this.$.$mol_dom_context, 'keydown', ( event: KeyboardEvent )=> this.hotkey( event ), { passive: false } )
		}

		hotkey( event: KeyboardEvent ) {
			if( event.defaultPrevented ) return
			const target = event.target as HTMLElement | null
			if( target?.closest?.( 'input, textarea, [contenteditable]' ) ) return
			const mod = event.ctrlKey || event.metaKey
			const action = mod
				? { KeyZ: event.shiftKey ? 'redo' : 'undo', KeyY: 'redo' }[ event.code ]
				: {
					Space: 'play', KeyB: 'draw', KeyP: 'draw', KeyE: 'erase', KeyV: 'select', KeyH: 'pan',
					Digit0: 'zoom', KeyD: 'copy', Delete: 'drop', Backspace: 'drop', Escape: 'escape',
				}[ event.code ]
			if( !action ) return
			event.preventDefault()
			switch( action ) {
				case 'undo': return this.undo()
				case 'redo': return this.redo()
				case 'play': return this.play_toggle()
				case 'zoom': return this.zoom_reset()
				case 'copy': return this.selected().length && this.selection_copy()
				case 'drop': return this.selected().length && this.selection_drop()
				case 'escape': return this.selected( [] )
				default: this.tool_set( action, true )
			}
		}

		midi_hold = new Map< number, { x: number, velocity: number } >()

		@ $mol_mem
		midi_listen() {
			if( !this.midi_in() ) return null
			const nav = this.$.$mol_dom_context.navigator as Navigator & { requestMIDIAccess?: ()=> Promise< any > }
			if( !nav.requestMIDIAccess ) return null
			const access = $mol_wire_sync( nav ).requestMIDIAccess!()
			const inputs = [ ... access.inputs.values() ] as { onmidimessage: null | ( ( event: { data: Uint8Array } )=> void ) }[]
			for( const input of inputs ) input.onmidimessage = event => this.midi_message( event.data )
			return {
				destructor: ()=> {
					for( const input of inputs ) input.onmidimessage = null
				},
			}
		}

		midi_message( data: Uint8Array ) {
			const kind = data[ 0 ] & 0xf0
			const midi = data[ 1 ]
			const velocity = ( data[ 2 ] ?? 0 ) / 127
			if( kind === 0x90 && velocity > 0 ) return this.midi_down( midi, velocity )
			if( kind === 0x80 || kind === 0x90 ) return this.midi_up( midi )
		}

		midi_down( midi: number, velocity: number ) {
			this.Player().live( this.color(), midi, velocity, 0.6 )
			const x = this.playhead()
			if( x !== null ) this.midi_hold.set( midi, { x, velocity } )
		}

		midi_up( midi: number ) {
			const hold = this.midi_hold.get( midi )
			this.midi_hold.delete( midi )
			if( !hold ) return
			const now = this.playhead() ?? 0.9999
			const end = now > hold.x ? now : 0.9999
			const notes = this.notes()
			let row = 0
			for( let i = 1; i < notes.length; ++i ) {
				if( Math.abs( notes[ i ] - midi ) < Math.abs( notes[ row ] - midi ) ) row = i
			}
			const y = $bog_doodle_scale_row_y( row, notes.length )
			const p = Math.max( 0, Math.min( 1, ( hold.velocity - 0.25 ) / 0.75 ) )
			this.sketch().add( { id: $bog_doodle_sketch_stroke_id(), color: this.color(), points: [ hold.x, y, p, end, y, p ] } )
		}

	}

}
