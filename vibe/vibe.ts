namespace $ {

	export type $bog_doodle_vibe = {
		id: string
		name: string
		ink: string
		settings: Pick< $bog_doodle_piece, 'key' | 'scale' | 'octave' | 'range' | 'bpm' | 'bars' | 'grid' | 'swing' >
	}

	export const $bog_doodle_vibe_list: readonly $bog_doodle_vibe[] = [
		{
			id: 'calm', name: 'Спокойно', ink: '#2f6fd8',
			settings: { key: 7, scale: 'major_penta', octave: 3, range: 2, bpm: 72, bars: 2, grid: '8', swing: 0 },
		},
		{
			id: 'sad', name: 'Грусть', ink: '#1f1d1a',
			settings: { key: 9, scale: 'minor', octave: 3, range: 2, bpm: 66, bars: 2, grid: '8', swing: 0 },
		},
		{
			id: 'dream', name: 'Мечта', ink: '#8a44c8',
			settings: { key: 5, scale: 'lydian', octave: 4, range: 2, bpm: 84, bars: 2, grid: '8t', swing: 0 },
		},
		{
			id: 'lullaby', name: 'Колыбельная', ink: '#b35fd8',
			settings: { key: 0, scale: 'major', octave: 4, range: 1, bpm: 60, bars: 2, grid: '4', swing: 0 },
		},
		{
			id: 'blues', name: 'Блюз', ink: '#d8452f',
			settings: { key: 4, scale: 'blues', octave: 2, range: 2, bpm: 92, bars: 2, grid: '8', swing: 1 },
		},
		{
			id: 'jazz', name: 'Джаз', ink: '#2a9d5c',
			settings: { key: 2, scale: 'dorian', octave: 3, range: 2, bpm: 118, bars: 2, grid: '8', swing: 0.66 },
		},
		{
			id: 'east', name: 'Восток', ink: '#e39a1b',
			settings: { key: 4, scale: 'harmonic', octave: 3, range: 2, bpm: 96, bars: 2, grid: '16', swing: 0 },
		},
		{
			id: 'dance', name: 'Танцы', ink: '#e39a1b',
			settings: { key: 9, scale: 'minor_penta', octave: 3, range: 2, bpm: 124, bars: 1, grid: '16', swing: 0.33 },
		},
		{
			id: 'cyber', name: 'Киберпанк', ink: '#d82f8a',
			settings: { key: 1, scale: 'phrygian', octave: 2, range: 3, bpm: 140, bars: 1, grid: '16', swing: 0 },
		},
		{
			id: 'game', name: 'Пиксельная игра', ink: '#f2c21b',
			settings: { key: 0, scale: 'mixolydian', octave: 4, range: 2, bpm: 150, bars: 2, grid: '16', swing: 0 },
		},
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
