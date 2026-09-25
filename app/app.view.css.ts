namespace $.$$ {

	$mol_style_define( $bog_doodle_app, {
		flex: {
			direction: 'column',
		},
		height: '100%',
		background: {
			color: $mol_theme.back,
		},
		color: $mol_theme.text,

		Bar: {
			flex: {
				wrap: 'wrap',
				shrink: 0,
			},
			alignItems: 'center',
			gap: $mol_gap.space,
			padding: $mol_gap.space,
		},

		Brand: {
			font: {
				weight: 'bold',
				size: '1.25rem',
			},
			padding: {
				left: $mol_gap.text,
				right: $mol_gap.text,
			},
		},

		Title_input: {
			flex: {
				grow: 0,
				shrink: 1,
				basis: '12rem',
			},
			minWidth: '7rem',
		},

		Tools: {
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
		},

		Palette: {
			flex: {
				wrap: 'wrap',
			},
			maxWidth: '100%',
			alignItems: 'center',
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
		},

		Color: {
			padding: $mol_gap.text,
			'@': {
				mol_check_checked: {
					true: {
						background: {
							color: $mol_theme.hover,
						},
					},
				},
			},
		},

		Color_dot: {
			width: '1.25rem',
			height: '1.25rem',
			border: {
				radius: '50%',
			},
			background: {
				color: $mol_style_func.vary( '--bog_doodle_app_ink' ),
			},
			boxShadow: `0 0 0 2px ${ $mol_theme.back }`,
		},

		Ink_dot: {
			width: '1.25rem',
			height: '1.25rem',
			border: {
				radius: '50%',
			},
			background: {
				color: $mol_style_func.vary( '--bog_doodle_app_ink' ),
			},
			boxShadow: `0 0 0 2px ${ $mol_theme.back }`,
		},

		Voice: {
			alignItems: 'center',
			color: $mol_theme.shade,
			padding: {
				left: $mol_gap.text,
				right: $mol_gap.text,
			},
			font: {
				size: '.875rem',
			},
		},

		Size: {
			alignItems: 'center',
		},

		Zoom: {
			alignItems: 'center',
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
		},

		Zoom_level: {
			minWidth: '3.5rem',
			justify: {
				content: 'center',
			},
		},

		Vibes: {
			flex: {
				wrap: 'wrap',
				shrink: 1,
				basis: '100%',
			},
			minWidth: 0,
			gap: $mol_gap.space,
		},

		Vibe: {
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
			'@': {
				mol_check_checked: {
					true: {
						color: $mol_theme.current,
						font: {
							weight: 'bold',
						},
					},
				},
			},
		},

		Layer_tools: {
			flex: {
				wrap: 'wrap',
			},
			alignItems: 'center',
			gap: $mol_gap.space,
			padding: $mol_gap.block,
		},

		Layer: {
			alignItems: 'center',
		},

		Layer_pick: {
			flex: {
				grow: 1,
			},
			'@': {
				mol_check_checked: {
					true: {
						color: $mol_theme.current,
						font: {
							weight: 'bold',
						},
					},
				},
			},
		},

		Patterns: {
			flex: {
				wrap: 'wrap',
			},
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.card,
			},
		},

		Pattern: {
			justify: {
				content: 'center',
			},
			minWidth: '2.5rem',
			'@': {
				mol_check_checked: {
					true: {
						color: $mol_theme.current,
						font: {
							weight: 'bold',
						},
					},
				},
			},
		},

		Main: {
			flex: {
				grow: 1,
				shrink: 1,
				basis: 0,
			},
			minHeight: 0,
			position: 'relative',
			padding: {
				top: 0,
				right: $mol_gap.space,
				bottom: $mol_gap.space,
				left: $mol_gap.space,
			},
			gap: $mol_gap.space,
		},

		Panel: {
			flex: {
				grow: 0,
				shrink: 0,
				basis: '22rem',
			},
			maxWidth: '100%',
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.back,
			},
		},

		Tempo_row: {
			gap: $mol_gap.space,
		},

		Flags: {
			flex: {
				direction: 'column',
			},
			padding: $mol_gap.block,
		},

		Pattern_tools: {
			flex: {
				wrap: 'wrap',
			},
		},

		Back_tools: {
			flex: {
				wrap: 'wrap',
			},
		},

		Export_tools: {
			flex: {
				wrap: 'wrap',
			},
		},

		Piece: {
			alignItems: 'center',
		},

		Piece_open: {
			flex: {
				grow: 1,
				direction: 'column',
			},
			alignItems: 'flex-start',
		},

		Piece_info: {
			color: $mol_theme.shade,
			font: {
				size: '.875rem',
			},
		},

		Gallery_new: {
			margin: $mol_gap.block,
		},
	} )

}
