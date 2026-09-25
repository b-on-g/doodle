namespace $ {

	export const $bog_doodle_scale_steps = {
		major_penta: [ 0, 2, 4, 7, 9 ],
		minor_penta: [ 0, 3, 5, 7, 10 ],
		major: [ 0, 2, 4, 5, 7, 9, 11 ],
		minor: [ 0, 2, 3, 5, 7, 8, 10 ],
		harmonic: [ 0, 2, 3, 5, 7, 8, 11 ],
		dorian: [ 0, 2, 3, 5, 7, 9, 10 ],
		phrygian: [ 0, 1, 3, 5, 7, 8, 10 ],
		lydian: [ 0, 2, 4, 6, 7, 9, 11 ],
		mixolydian: [ 0, 2, 4, 5, 7, 9, 10 ],
		blues: [ 0, 3, 5, 6, 7, 10 ],
		chromatic: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
	}

	export type $bog_doodle_scale_id = keyof typeof $bog_doodle_scale_steps

	export const $bog_doodle_scale_keys = [ 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B' ]

	export function $bog_doodle_scale_notes( key: number, scale: $bog_doodle_scale_id, octave: number, range: number ) {
		const steps = $bog_doodle_scale_steps[ scale ] ?? $bog_doodle_scale_steps.major
		const base = 12 * ( octave + 1 ) + key
		const notes = [] as number[]
		for( let o = 0; o < range; ++o ) {
			for( const step of steps ) notes.push( base + 12 * o + step )
		}
		notes.push( base + 12 * range )
		return notes
	}

	export function $bog_doodle_scale_row( y: number, count: number ) {
		const row = Math.floor( ( 1 - y ) * count )
		return Math.max( 0, Math.min( count - 1, row ) )
	}

	export function $bog_doodle_scale_row_y( row: number, count: number ) {
		return 1 - ( row + 0.5 ) / count
	}

	export function $bog_doodle_scale_name( midi: number ) {
		return $bog_doodle_scale_keys[ ( ( midi % 12 ) + 12 ) % 12 ] + ( Math.floor( midi / 12 ) - 1 )
	}

	export function $bog_doodle_scale_freq( midi: number ) {
		return 440 * 2 ** ( ( midi - 69 ) / 12 )
	}

}
