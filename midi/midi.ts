namespace $ {

	export type $bog_doodle_midi_note = {
		time: number
		length: number
		midi: number
		velocity: number
		channel: number
	}

	function varlen( value: number ) {
		const bytes = [ value & 127 ]
		while( value > 127 ) {
			value >>= 7
			bytes.unshift( ( value & 127 ) | 128 )
		}
		return bytes
	}

	export function $bog_doodle_midi_file( notes: readonly $bog_doodle_midi_note[], bpm: number, ppq = 480 ) {
		const moments = [] as { tick: number, order: number, bytes: number[] }[]
		for( const note of notes ) {
			const start = Math.round( note.time * ppq )
			const end = Math.max( start + 1, Math.round( ( note.time + note.length ) * ppq ) )
			const velocity = Math.max( 1, Math.min( 127, Math.round( note.velocity * 127 ) ) )
			const channel = note.channel & 15
			moments.push( { tick: start, order: 1, bytes: [ 0x90 | channel, note.midi, velocity ] } )
			moments.push( { tick: end, order: 0, bytes: [ 0x80 | channel, note.midi, 0 ] } )
		}
		moments.sort( ( a, b ) => a.tick - b.tick || a.order - b.order )

		const tempo = Math.round( 60_000_000 / bpm )
		const track = [ 0, 0xff, 0x51, 3, ( tempo >> 16 ) & 255, ( tempo >> 8 ) & 255, tempo & 255 ]
		let tick = 0
		for( const moment of moments ) {
			track.push( ... varlen( moment.tick - tick ), ... moment.bytes )
			tick = moment.tick
		}
		track.push( 0, 0xff, 0x2f, 0 )

		const size = track.length
		return new Uint8Array( [
			0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, ( ppq >> 8 ) & 255, ppq & 255,
			0x4d, 0x54, 0x72, 0x6b, ( size >>> 24 ) & 255, ( size >> 16 ) & 255, ( size >> 8 ) & 255, size & 255,
			... track,
		] )
	}

}
