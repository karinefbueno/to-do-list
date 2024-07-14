export default {
	Container: {
		width: 'variable',
		height: 'variable',
	},
	'Title-style': {
		font: 'Nunito',
		size: 'variable',
		color: 'variable',
	},
	'text-style': {
		font: 'Nunito',
		size: 'variable',
		color: 'variable',
	},
	Button: {
		cta: {
			primary: {
				background: 'colors/enabled',
				font: 'colors/enabled',
			},
			secondary: {
				background: 'neutros/background',
				font: 'colors/enabled',
			},
		},
	},
	'Corner-radius': {
		'border-color': 'neutros/border-card',
		'border-radius': '16px',
	},
	'Background-color': {
		infoCard: 'neutros/bg-card-default',
		others: 'none neutros/background',
	},
	Icon: {
		optional: true,
	},
} as const;
