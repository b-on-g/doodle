namespace $ {

	export const $bog_doodle_synth_colors = [
		{ ink: '#1f1d1a' },
		{ ink: '#d8452f' },
		{ ink: '#2f6fd8' },
		{ ink: '#2a9d5c' },
		{ ink: '#e39a1b' },
		{ ink: '#8a44c8' },
	]

	export function $bog_doodle_synth_hsl( ink: string ) {
		const hex = ink.replace( '#', '' ).slice( 0, 6 ).padEnd( 6, '0' )
		const r = parseInt( hex.slice( 0, 2 ), 16 ) / 255
		const g = parseInt( hex.slice( 2, 4 ), 16 ) / 255
		const b = parseInt( hex.slice( 4, 6 ), 16 ) / 255
		const max = Math.max( r, g, b ), min = Math.min( r, g, b )
		const l = ( max + min ) / 2
		const d = max - min
		if( !d ) return { h: 0, s: 0, l }
		const s = d / ( 1 - Math.abs( 2 * l - 1 ) )
		const h = max === r ? ( ( g - b ) / d + 6 ) % 6 : max === g ? ( b - r ) / d + 2 : ( r - g ) / d + 4
		return { h: h * 60, s, l }
	}

	export function $bog_doodle_synth_timbre( ink: string ) {
		const { h, s, l } = $bog_doodle_synth_hsl( ink )
		if( s < 0.2 || l < 0.12 || l > 0.92 ) return 0
		if( h < 15 || h >= 345 ) return 1
		if( h < 70 ) return 4
		if( h < 170 ) return 3
		if( h < 250 ) return 2
		return 5
	}

	export function $bog_doodle_synth_ink( stroke: { color: number, ink?: string } ) {
		return stroke.ink || $bog_doodle_synth_colors[ stroke.color ]?.ink || '#1f1d1a'
	}

	function envelope( ctx: BaseAudioContext, dest: AudioNode, time: number, attack: number, peak: number, hold: number, release: number ) {
		const gain = ctx.createGain()
		const decay = Math.min( hold, 0.12 )
		const sustain = peak * 0.6
		const fade = time + attack + hold
		gain.gain.setValueAtTime( 0, time )
		gain.gain.linearRampToValueAtTime( peak, time + attack )
		gain.gain.linearRampToValueAtTime( sustain, time + attack + decay )
		gain.gain.setValueAtTime( sustain, fade )
		gain.gain.linearRampToValueAtTime( 0, fade + release )
		gain.connect( dest )
		return { gain, end: fade + release + 0.03 }
	}

	function osc( ctx: BaseAudioContext, type: OscillatorType, freq: number, dest: AudioNode, time: number, end: number, detune = 0 ) {
		const node = ctx.createOscillator()
		node.type = type
		node.frequency.setValueAtTime( freq, time )
		node.detune.setValueAtTime( detune, time )
		node.connect( dest )
		node.start( time )
		node.stop( end )
		return node
	}

	export function $bog_doodle_synth_note( ctx: BaseAudioContext, dest: AudioNode, color: number, freq: number, time: number, length: number, velocity: number ) {
		const level = 0.18 * velocity
		switch( color ) {

			case 1: {
				const env = envelope( ctx, dest, time, 0.003, level * 1.3, Math.min( length, 0.12 ), 0.9 )
				const filter = ctx.createBiquadFilter()
				filter.type = 'lowpass'
				filter.Q.setValueAtTime( 0.5, time )
				filter.frequency.setValueAtTime( Math.min( 9000, freq * ( 3 + 5 * velocity ) ), time )
				filter.frequency.exponentialRampToValueAtTime( Math.min( 9000, freq * 1.2 ), time + 0.35 )
				filter.connect( env.gain )
				osc( ctx, 'sawtooth', freq, filter, time, env.end )
				return
			}

			case 2: {
				const env = envelope( ctx, dest, time, Math.min( 0.3, Math.max( 0.08, length / 2 ) ), level * 0.9, length, 1.2 )
				const filter = ctx.createBiquadFilter()
				filter.type = 'lowpass'
				filter.Q.setValueAtTime( 0.3, time )
				filter.frequency.setValueAtTime( Math.min( 6000, freq * 2.5 ), time )
				filter.connect( env.gain )
				osc( ctx, 'sawtooth', freq, filter, time, env.end, -7 )
				osc( ctx, 'sawtooth', freq, filter, time, env.end, 7 )
				return
			}

			case 3: {
				const env = envelope( ctx, dest, time, 0.002, level * 1.5, 0.03, 0.7 )
				osc( ctx, 'sine', freq, env.gain, time, env.end )
				const over = envelope( ctx, dest, time, 0.001, level * 0.18, 0.005, 0.08 )
				osc( ctx, 'sine', freq * 3.99, over.gain, time, over.end )
				return
			}

			case 4: {
				const env = envelope( ctx, dest, time, 0.02, level * 0.7, length, 0.25 )
				const filter = ctx.createBiquadFilter()
				filter.type = 'lowpass'
				filter.Q.setValueAtTime( 0.8, time )
				filter.frequency.setValueAtTime( Math.min( 7000, freq * 3 ), time )
				filter.connect( env.gain )
				const voice = osc( ctx, 'square', freq, filter, time, env.end )
				const wobble = ctx.createGain()
				wobble.gain.setValueAtTime( 0, time )
				wobble.gain.linearRampToValueAtTime( 6, time + 0.3 )
				wobble.connect( voice.detune )
				osc( ctx, 'sine', 5.5, wobble, time, env.end )
				return
			}

			case 5: {
				const env = envelope( ctx, dest, time, 0.002, level * 1.1, 0.02, 2 )
				const carrier = osc( ctx, 'sine', freq, env.gain, time, env.end )
				const depth = ctx.createGain()
				depth.gain.setValueAtTime( freq * 1.4, time )
				depth.gain.exponentialRampToValueAtTime( Math.max( 1, freq * 0.05 ), time + 1 )
				depth.connect( carrier.frequency )
				osc( ctx, 'sine', freq * 3.5, depth, time, env.end )
				return
			}

			default: {
				const env = envelope( ctx, dest, time, 0.004, level * 1.4, Math.min( length, 0.5 ), 1 )
				const carrier = osc( ctx, 'sine', freq, env.gain, time, env.end )
				const depth = ctx.createGain()
				depth.gain.setValueAtTime( freq * ( 0.6 + velocity ), time )
				depth.gain.exponentialRampToValueAtTime( Math.max( 1, freq * 0.08 ), time + 0.7 )
				depth.connect( carrier.frequency )
				osc( ctx, 'sine', freq, depth, time, env.end )
			}

		}
	}

	export function $bog_doodle_synth_click( ctx: BaseAudioContext, dest: AudioNode, time: number, accent: boolean ) {
		const env = envelope( ctx, dest, time, 0.001, accent ? 0.25 : 0.12, 0.005, 0.05 )
		osc( ctx, 'square', accent ? 1760 : 1320, env.gain, time, env.end )
	}

	export function $bog_doodle_synth_room( ctx: BaseAudioContext, seconds: number ) {
		const rate = ctx.sampleRate
		const frames = Math.round( rate * seconds )
		const buffer = ctx.createBuffer( 2, frames, rate )
		let seed = 1
		const noise = ()=> ( seed = ( seed * 16807 ) % 2147483647 ) / 1073741823.5 - 1
		for( let channel = 0; channel < 2; ++channel ) {
			const data = buffer.getChannelData( channel )
			for( let i = 0; i < frames; ++i ) {
				const t = i / frames
				data[ i ] = noise() * ( 1 - t ) ** 3 * Math.min( 1, i / ( rate * 0.01 ) )
			}
		}
		return buffer
	}

	export function $bog_doodle_synth_bus( ctx: BaseAudioContext, room = 2 ) {
		const master = ctx.createGain()
		master.gain.setValueAtTime( 0.55, 0 )
		const limit = ctx.createDynamicsCompressor()
		limit.threshold.setValueAtTime( -6, 0 )
		limit.knee.setValueAtTime( 6, 0 )
		limit.ratio.setValueAtTime( 12, 0 )
		limit.attack.setValueAtTime( 0.002, 0 )
		limit.release.setValueAtTime( 0.15, 0 )
		master.connect( limit )
		if( room > 0 ) {
			const reverb = ctx.createConvolver()
			reverb.buffer = $bog_doodle_synth_room( ctx, room )
			const wet = ctx.createGain()
			wet.gain.setValueAtTime( 0.22, 0 )
			master.connect( reverb )
			reverb.connect( wet )
			wet.connect( limit )
		}
		limit.connect( ctx.destination )
		return master
	}

}
