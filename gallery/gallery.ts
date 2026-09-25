namespace $ {

	export class $bog_doodle_gallery extends $mol_object {

		@ $mol_mem
		ids( next?: readonly string[] ): readonly string[] {
			return this.$.$mol_state_local.value( 'bog_doodle_ids', next ) ?? []
		}

		@ $mol_mem
		current( next?: string ): string {
			const id = this.$.$mol_state_local.value( 'bog_doodle_current', next ) ?? ''
			return this.ids().includes( id ) ? id : this.ids()[ 0 ] ?? ''
		}

		@ $mol_mem_key
		piece( id: string, next?: $bog_doodle_piece ): $bog_doodle_piece {
			const packed = this.$.$mol_state_local.value( 'bog_doodle_piece_' + id, next && $bog_doodle_piece_pack( next ) )
			if( next ) return next
			if( !packed ) return $bog_doodle_piece_empty()
			try {
				return $bog_doodle_piece_unpack( packed )
			} catch {
				return $bog_doodle_piece_empty()
			}
		}

		@ $mol_mem_key
		back( id: string, next?: string ): string {
			return this.$.$mol_state_local.value( 'bog_doodle_back_' + id, next === '' ? null : next ) ?? ''
		}

		@ $mol_mem_key
		stamp( id: string, next?: number ): number {
			return this.$.$mol_state_local.value( 'bog_doodle_stamp_' + id, next ) ?? 0
		}

		create( piece = $bog_doodle_piece_empty() ) {
			const id = $bog_doodle_sketch_stroke_id()
			this.piece( id, piece )
			this.stamp( id, Date.now() )
			this.ids( [ id, ... this.ids() ] )
			this.current( id )
			return id
		}

		save( id: string, piece: $bog_doodle_piece ) {
			this.piece( id, piece )
			this.stamp( id, Date.now() )
		}

		remove( id: string ) {
			this.ids( this.ids().filter( item => item !== id ) )
			this.$.$mol_state_local.value( 'bog_doodle_piece_' + id, null )
			this.$.$mol_state_local.value( 'bog_doodle_back_' + id, null )
			this.$.$mol_state_local.value( 'bog_doodle_stamp_' + id, null )
		}

	}

}
