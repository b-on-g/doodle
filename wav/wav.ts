namespace $ {

	export function $bog_doodle_wav( channels: readonly Float32Array[], rate: number ) {
		const count = channels.length
		const frames = channels[ 0 ]?.length ?? 0
		const size = frames * count * 2
		const view = new DataView( new ArrayBuffer( 44 + size ) )
		const text = ( at: number, str: string ) => {
			for( let i = 0; i < str.length; ++i ) view.setUint8( at + i, str.charCodeAt( i ) )
		}
		text( 0, 'RIFF' )
		view.setUint32( 4, 36 + size, true )
		text( 8, 'WAVE' )
		text( 12, 'fmt ' )
		view.setUint32( 16, 16, true )
		view.setUint16( 20, 1, true )
		view.setUint16( 22, count, true )
		view.setUint32( 24, rate, true )
		view.setUint32( 28, rate * count * 2, true )
		view.setUint16( 32, count * 2, true )
		view.setUint16( 34, 16, true )
		text( 36, 'data' )
		view.setUint32( 40, size, true )
		let at = 44
		for( let frame = 0; frame < frames; ++frame ) {
			for( const channel of channels ) {
				const sample = Math.max( -1, Math.min( 1, channel[ frame ] ) )
				view.setInt16( at, Math.round( sample < 0 ? sample * 0x8000 : sample * 0x7fff ), true )
				at += 2
			}
		}
		return new Uint8Array( view.buffer )
	}

}
