namespace $ {

	export type $bog_doodle_vibe = {
		id: string
		ink: string
		settings: Pick< $bog_doodle_piece, 'key' | 'scale' | 'octave' | 'range' | 'bpm' | 'bars' | 'grid' | 'swing' >
	}

	export const $bog_doodle_vibe_list: readonly $bog_doodle_vibe[] = [
		{ id: 'calm', ink: '#2f6fd8', settings: { key: 7, scale: 'major_penta', octave: 3, range: 2, bpm: 72, bars: 2, grid: '8', swing: 0 } },
		{ id: 'sad', ink: '#1f1d1a', settings: { key: 9, scale: 'minor', octave: 3, range: 2, bpm: 66, bars: 2, grid: '8', swing: 0 } },
		{ id: 'dream', ink: '#8a44c8', settings: { key: 5, scale: 'lydian', octave: 4, range: 2, bpm: 84, bars: 2, grid: '8t', swing: 0 } },
		{ id: 'lullaby', ink: '#b35fd8', settings: { key: 0, scale: 'major', octave: 4, range: 1, bpm: 60, bars: 2, grid: '4', swing: 0 } },
		{ id: 'meditation', ink: '#9b6fe0', settings: { key: 2, scale: 'major_penta', octave: 3, range: 2, bpm: 50, bars: 4, grid: '4', swing: 0 } },
		{ id: 'rain', ink: '#3d8fd1', settings: { key: 11, scale: 'minor_penta', octave: 4, range: 2, bpm: 80, bars: 2, grid: '16', swing: 0 } },
		{ id: 'sunrise', ink: '#f0a030', settings: { key: 2, scale: 'lydian', octave: 3, range: 2, bpm: 96, bars: 2, grid: '8', swing: 0 } },
		{ id: 'space', ink: '#6a3fd0', settings: { key: 6, scale: 'lydian', octave: 2, range: 3, bpm: 60, bars: 4, grid: '8t', swing: 0 } },
		{ id: 'fairy', ink: '#c060e0', settings: { key: 4, scale: 'major', octave: 4, range: 2, bpm: 88, bars: 2, grid: '8t', swing: 0 } },
		{ id: 'epic', ink: '#2446a8', settings: { key: 2, scale: 'minor', octave: 2, range: 3, bpm: 90, bars: 2, grid: '8', swing: 0 } },
		{ id: 'blues', ink: '#d8452f', settings: { key: 4, scale: 'blues', octave: 2, range: 2, bpm: 92, bars: 2, grid: '8', swing: 1 } },
		{ id: 'jazz', ink: '#2a9d5c', settings: { key: 2, scale: 'dorian', octave: 3, range: 2, bpm: 118, bars: 2, grid: '8', swing: 0.66 } },
		{ id: 'noir', ink: '#4a4a4a', settings: { key: 3, scale: 'harmonic', octave: 2, range: 2, bpm: 76, bars: 2, grid: '8', swing: 0.66 } },
		{ id: 'lofi', ink: '#5a8fc8', settings: { key: 5, scale: 'dorian', octave: 3, range: 2, bpm: 78, bars: 2, grid: '8', swing: 0.66 } },
		{ id: 'funk', ink: '#e08a1b', settings: { key: 4, scale: 'dorian', octave: 2, range: 2, bpm: 104, bars: 1, grid: '16', swing: 0.33 } },
		{ id: 'dance', ink: '#e39a1b', settings: { key: 9, scale: 'minor_penta', octave: 3, range: 2, bpm: 124, bars: 1, grid: '16', swing: 0.33 } },
		{ id: 'rock', ink: '#e8b020', settings: { key: 4, scale: 'minor_penta', octave: 2, range: 2, bpm: 136, bars: 2, grid: '8', swing: 0 } },
		{ id: 'tango', ink: '#c8302a', settings: { key: 7, scale: 'harmonic', octave: 3, range: 2, bpm: 120, bars: 2, grid: '16', swing: 0 } },
		{ id: 'march', ink: '#333333', settings: { key: 10, scale: 'major', octave: 3, range: 2, bpm: 112, bars: 2, grid: '8', swing: 0 } },
		{ id: 'medieval', ink: '#a8402a', settings: { key: 2, scale: 'dorian', octave: 3, range: 2, bpm: 84, bars: 2, grid: '8t', swing: 0 } },
		{ id: 'celtic', ink: '#3aa860', settings: { key: 2, scale: 'mixolydian', octave: 3, range: 2, bpm: 132, bars: 2, grid: '8t', swing: 0 } },
		{ id: 'east', ink: '#e39a1b', settings: { key: 4, scale: 'harmonic', octave: 3, range: 2, bpm: 96, bars: 2, grid: '16', swing: 0 } },
		{ id: 'anxiety', ink: '#b8201a', settings: { key: 1, scale: 'phrygian', octave: 2, range: 2, bpm: 108, bars: 1, grid: '16t', swing: 0 } },
		{ id: 'horror', ink: '#5a1010', settings: { key: 6, scale: 'chromatic', octave: 2, range: 1, bpm: 70, bars: 2, grid: '8t', swing: 0 } },
		{ id: 'cyber', ink: '#d82f8a', settings: { key: 1, scale: 'phrygian', octave: 2, range: 3, bpm: 140, bars: 1, grid: '16', swing: 0 } },
		{ id: 'game', ink: '#f2c21b', settings: { key: 0, scale: 'mixolydian', octave: 4, range: 2, bpm: 150, bars: 2, grid: '16', swing: 0 } },
		{ id: 'impressionism', ink: '#7fb0e0', settings: { key: 1, scale: 'lydian', octave: 3, range: 3, bpm: 70, bars: 4, grid: 'free', swing: 0 } },
		{ id: 'minimalism', ink: '#2a9d8c', settings: { key: 0, scale: 'major_penta', octave: 3, range: 1, bpm: 120, bars: 1, grid: '16', swing: 0 } },
		{ id: 'baroque', ink: '#c0502a', settings: { key: 2, scale: 'harmonic', octave: 3, range: 2, bpm: 100, bars: 2, grid: '16', swing: 0 } },
		{ id: 'avantgarde', ink: '#a040c0', settings: { key: 6, scale: 'chromatic', octave: 3, range: 2, bpm: 96, bars: 2, grid: 'free', swing: 0 } },
	]

	export function $bog_doodle_vibe_apply( piece: $bog_doodle_piece, id: string ): $bog_doodle_piece {
		const vibe = $bog_doodle_vibe_list.find( item => item.id === id )
		return vibe ? { ... piece, ... vibe.settings } : piece
	}

	export function $bog_doodle_vibe_current( piece: $bog_doodle_piece ) {
		return $bog_doodle_vibe_list.find( vibe => Object.entries( vibe.settings ).every(
			( [ key, value ] ) => piece[ key as keyof typeof vibe.settings ] === value
		) )?.id ?? ''
	}

}
