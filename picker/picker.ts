namespace $ {

	export function $bog_doodle_picker_hsv( hex: string ) {
		const clean = hex.replace( '#', '' ).slice( 0, 6 ).padEnd( 6, '0' )
		const r = parseInt( clean.slice( 0, 2 ), 16 ) / 255
		const g = parseInt( clean.slice( 2, 4 ), 16 ) / 255
		const b = parseInt( clean.slice( 4, 6 ), 16 ) / 255
		const max = Math.max( r, g, b ), min = Math.min( r, g, b )
		const d = max - min
		let h = 0
		if( d ) h = max === r ? ( ( g - b ) / d + 6 ) % 6 : max === g ? ( b - r ) / d + 2 : ( r - g ) / d + 4
		return { h: h * 60, s: max ? d / max : 0, v: max }
	}

	export function $bog_doodle_picker_hex( h: number, s: number, v: number ) {
		const f = ( n: number ) => {
			const k = ( n + h / 60 ) % 6
			return v - v * s * Math.max( 0, Math.min( k, 4 - k, 1 ) )
		}
		return '#' + [ f( 5 ), f( 3 ), f( 1 ) ]
			.map( c => Math.round( Math.max( 0, Math.min( 1, c ) ) * 255 ).toString( 16 ).padStart( 2, '0' ) )
			.join( '' )
	}

	export function $bog_doodle_picker_valid( hex: string ) {
		return /^#[0-9a-f]{6}$/i.test( hex )
	}

}
