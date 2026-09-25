namespace $.$$ {

	$mol_style_define( $bog_doodle_board, {
		flex: {
			grow: 1,
			shrink: 1,
			basis: 0,
		},
		minHeight: '16rem',
		minWidth: 0,
		touchAction: 'none',
		userSelect: 'none',
		cursor: 'crosshair',
		border: {
			radius: $mol_gap.round,
		},
		'@': {
			bog_doodle_board_tool: {
				select: {
					cursor: 'default',
				},
				pan: {
					cursor: 'grab',
				},
				erase: {
					cursor: 'cell',
				},
			},
		},
	} )

}
