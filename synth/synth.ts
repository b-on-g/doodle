namespace $ {

	export const $bog_doodle_synth_colors = [
		{ ink: '#1f1d1a', name: 'Пианино' },
		{ ink: '#d8452f', name: 'Щипок' },
		{ ink: '#2f6fd8', name: 'Пэд' },
		{ ink: '#2a9d5c', name: 'Маримба' },
		{ ink: '#e39a1b', name: 'Лид' },
		{ ink: '#8a44c8', name: 'Колокол' },
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
		gain.gain.setValueAtTime( 0.0001, time )
		gain.gain.linearRampToValueAtTime( peak, time + attack )
		gain.gain.setTargetAtTime( peak * 0.6, time + attack, hold / 3 + 0.01 )
		gain.gain.setTargetAtTime( 0.0001, time + attack + hold, release / 4 )
		gain.connect( dest )
		return { gain, end: time + attack + hold + release }
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
				const env = envelope( ctx, dest, time, 0.004, level * 1.2, Math.min( length, 0.25 ), 0.4 )
				const filter = ctx.createBiquadFilter()
				filter.type = 'lowpass'
				filter.frequency.setValueAtTime( freq * 8, time )
				filter.frequency.exponentialRampToValueAtTime( freq * 1.5, time + 0.3 )
				filter.connect( env.gain )
				osc( ctx, 'sawtooth', freq, filter, time, env.end )
				return
			}

			case 2: {
				const env = envelope( ctx, dest, time, Math.min( 0.25, length / 2 ), level * 0.8, length, 0.6 )
				osc( ctx, 'sine', freq, env.gain, time, env.end, -7 )
				osc( ctx, 'triangle', freq, env.gain, time, env.end, 7 )
				osc( ctx, 'sine', freq * 2, env.gain, time, env.end, 3 )
				return
			}

			case 3: {
				const env = envelope( ctx, dest, time, 0.003, level * 1.4, 0.05, 0.5 )
				osc( ctx, 'sine', freq, env.gain, time, env.end )
				const over = envelope( ctx, dest, time, 0.002, level * 0.4, 0.01, 0.12 )
				osc( ctx, 'sine', freq * 4, over.gain, time, over.end )
				return
			}

			case 4: {
				const env = envelope( ctx, dest, time, 0.01, level * 0.6, length, 0.12 )
				const filter = ctx.createBiquadFilter()
				filter.type = 'lowpass'
				filter.frequency.setValueAtTime( Math.min( 12000, freq * 6 ), time )
				filter.Q.setValueAtTime( 4, time )
				filter.connect( env.gain )
				osc( ctx, 'square', freq, filter, time, env.end )
				osc( ctx, 'sawtooth', freq, filter, time, env.end, 9 )
				return
			}

			case 5: {
				const env = envelope( ctx, dest, time, 0.002, level * 1.1, 0.02, 1.6 )
				const carrier = osc( ctx, 'sine', freq, env.gain, time, env.end )
				const depth = ctx.createGain()
				depth.gain.setValueAtTime( freq * 2.5, time )
				depth.gain.exponentialRampToValueAtTime( 1, time + 1.2 )
				depth.connect( carrier.frequency )
				osc( ctx, 'sine', freq * 3.5, depth, time, env.end )
				return
			}

			default: {
				const env = envelope( ctx, dest, time, 0.005, level * 1.3, Math.min( length, 0.4 ), 0.8 )
				osc( ctx, 'triangle', freq, env.gain, time, env.end )
				const over = envelope( ctx, dest, time, 0.003, level * 0.35, 0.05, 0.3 )
				osc( ctx, 'sine', freq * 2, over.gain, time, over.end )
			}

		}
	}

	export function $bog_doodle_synth_click( ctx: BaseAudioContext, dest: AudioNode, time: number, accent: boolean ) {
		const env = envelope( ctx, dest, time, 0.001, accent ? 0.25 : 0.12, 0.005, 0.05 )
		osc( ctx, 'square', accent ? 1760 : 1320, env.gain, time, env.end )
	}

	export function $bog_doodle_synth_bus( ctx: BaseAudioContext ) {
		const comp = ctx.createDynamicsCompressor()
		comp.threshold.setValueAtTime( -14, 0 )
		comp.ratio.setValueAtTime( 4, 0 )
		comp.connect( ctx.destination )
		return comp
	}

}
