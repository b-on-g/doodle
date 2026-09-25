namespace $.$$ {

	export class $bog_doodle_slider extends $.$bog_doodle_slider {

		value_text() {
			return String( this.value() )
		}

		changed( event: Event ) {
			const next = Number( ( event.target as HTMLInputElement ).value )
			if( !Number.isNaN( next ) ) this.value( next )
		}

	}

}
