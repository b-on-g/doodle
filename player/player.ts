namespace $ {

	type mark = { step: number, time: number, duration: number }

	export class $bog_doodle_player extends $mol_object {

		piece() {
			return $bog_doodle_piece_empty()
		}

		pattern() {
			return 0
		}

		click() {
			return false
		}

		steps_per_bar() {
			return $bog_doodle_score_grids[ this.piece().grid ] ?? 8
		}

		steps() {
			return this.steps_per_bar() * this.piece().bars
		}

		bar_time() {
			return 4 * 60 / Math.max( 20, this.piece().bpm )
		}

		@ $mol_mem
		notes() {
			const piece = this.piece()
			return $bog_doodle_scale_notes( piece.key, piece.scale, piece.octave, piece.range )
		}

		@ $mol_mem_key
		events( pattern: number ) {
			const piece = this.piece()
			const strokes = ( piece.patterns[ pattern ] ?? [] ).filter( s => $bog_doodle_piece_layer_of( piece, s )?.audible !== false )
			const events = $bog_doodle_score( strokes, this.notes(), this.steps() )
			const by_step = new Map< number, $bog_doodle_score_event[] >()
			for( const event of events ) {
				const list = by_step.get( event.step ) ?? []
				list.push( event )
				by_step.set( event.step, list )
			}
			return by_step
		}

		order() {
			const piece = this.piece()
			if( !piece.chain ) return [ Math.min( this.pattern(), piece.patterns.length - 1 ) ]
			return piece.patterns.map( ( _, index ) => index )
		}

		audio = null as AudioContext | null
		bus = null as AudioNode | null
		timer = null as $mol_after_timeout | null
		step = 0
		base = 0
		marks = [] as mark[]

		context() {
			if( this.audio ) return this.audio
			const Context = ( this.$.$mol_dom_context as any ).AudioContext as typeof AudioContext
			this.audio = new Context
			this.bus = $bog_doodle_synth_bus( this.audio )
			return this.audio
		}

		@ $mol_mem
		playing( next?: boolean ) {
			return next ?? false
		}

		start() {
			const ctx = this.context()
			ctx.resume()
			this.step = 0
			this.base = ctx.currentTime + 0.08
			this.marks = []
			this.playing( true )
			this.tick()
		}

		stop() {
			this.timer?.destructor()
			this.timer = null
			this.marks = []
			this.playing( false )
		}

		toggle() {
			if( this.playing() ) this.stop()
			else this.start()
		}

		tick() {
			const ctx = this.context()
			const ahead = ctx.currentTime + 0.2
			while( this.base < ahead ) this.schedule( ctx )
			this.timer = new this.$.$mol_after_timeout( 25, ()=> this.tick() )
		}

		schedule( ctx: BaseAudioContext ) {
			const steps = this.steps()
			const order = this.order()
			const pattern = order[ Math.floor( this.step / steps ) % order.length ]
			const local = this.step % steps
			const per_bar = this.steps_per_bar()
			const duration = this.bar_time() / per_bar
			const time = this.base + $bog_doodle_score_time( local, per_bar, this.bar_time(), this.piece().swing ) - local * duration

			for( const event of this.events( pattern ).get( local ) ?? [] ) {
				$bog_doodle_synth_note( ctx, this.bus!, event.color, $bog_doodle_scale_freq( event.midi ), time, event.length * duration * 0.95, event.velocity )
			}

			const beat = per_bar / 4
			if( this.click() && local % beat === 0 ) {
				$bog_doodle_synth_click( ctx, this.bus!, time, local % per_bar === 0 )
			}

			this.marks.push( { step: this.step, time: this.base, duration } )
			if( this.marks.length > 64 ) this.marks.shift()
			this.base += duration
			this.step = ( this.step + 1 ) % ( steps * order.length )
		}

		playhead() {
			if( !this.audio || !this.playing() ) return null
			const now = this.audio.currentTime
			let found = null as mark | null
			for( const mark of this.marks ) if( mark.time <= now ) found = mark
			if( !found ) return null
			const steps = this.steps()
			const order = this.order()
			const frac = Math.min( 1, ( now - found.time ) / found.duration )
			return {
				pattern: order[ Math.floor( found.step / steps ) % order.length ],
				x: ( found.step % steps + frac ) / steps,
			}
		}

		live( color: number, midi: number, velocity: number, length = 0.4 ) {
			const ctx = this.context()
			ctx.resume()
			$bog_doodle_synth_note( ctx, this.bus!, color, $bog_doodle_scale_freq( midi ), ctx.currentTime + 0.01, length, velocity )
		}

		async render( loops: number ) {
			const steps = this.steps()
			const order = this.order()
			const per_bar = this.steps_per_bar()
			const bar_time = this.bar_time()
			const duration = bar_time / per_bar
			const total = steps * order.length * loops
			const rate = 44100
			const Offline = ( this.$.$mol_dom_context as any ).OfflineAudioContext as typeof OfflineAudioContext
			const ctx = new Offline( 2, Math.ceil( ( total * duration + 2 ) * rate ), rate )
			const bus = $bog_doodle_synth_bus( ctx )
			for( let step = 0; step < total; ++step ) {
				const pattern = order[ Math.floor( step / steps ) % order.length ]
				const local = step % steps
				const time = ( step - local ) * duration + $bog_doodle_score_time( local, per_bar, bar_time, this.piece().swing )
				for( const event of this.events( pattern ).get( local ) ?? [] ) {
					$bog_doodle_synth_note( ctx, bus, event.color, $bog_doodle_scale_freq( event.midi ), time, event.length * duration * 0.95, event.velocity )
				}
			}
			const buffer = await ctx.startRendering()
			const channels = [] as Float32Array[]
			for( let i = 0; i < buffer.numberOfChannels; ++i ) channels.push( buffer.getChannelData( i ) as Float32Array )
			return $bog_doodle_wav( channels, rate )
		}

		midi_notes() {
			const steps = this.steps()
			const beat_steps = this.steps_per_bar() / 4
			const notes = [] as $bog_doodle_midi_note[]
			this.order().forEach( ( pattern, index ) => {
				for( const events of this.events( pattern ).values() ) {
					for( const event of events ) notes.push( {
						time: ( index * steps + event.step ) / beat_steps,
						length: event.length / beat_steps,
						midi: event.midi,
						velocity: event.velocity,
						channel: event.color,
					} )
				}
			} )
			return notes
		}

		destructor() {
			this.stop()
			this.audio?.close()
		}

	}

}
