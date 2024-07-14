export default {
	'elevation-shadow': {
		'shadow-sm': {
			value: {
				blur: 3,
				x: 0,
				y: 1,
				opacity: 0.1,
			},
			type: 'shadow',
		},
		'shadow-md': {
			value: {
				blur: 10,
				x: 0,
				y: 5,
				opacity: 0.3,
			},
			type: 'shadow',
		},
		'shadow-lg': {
			value: {
				blur: 25,
				x: 0,
				y: 15,
				opacity: 0.5,
			},
			type: 'shadow',
		},
		'inner-shadow': {
			value: {
				blur: 20,
				x: 2,
				y: 9,
				opacity: 0.7,
			},
			type: 'shadow',
		},
		'header-shadow': {
			value: {
				blur: 4,
				x: 0,
				y: 4,
				opacity: 0.25,
			},
			type: 'shadow',
		},
		'drop-shadow': {
			value: {
				blur: 4,
				x: 0,
				y: 1,
				opacity: 1.0,
			},
			type: 'shadow',
		},
	},
	'border-radius': {
		'border-radius-xs': '4px',
		'border-radius-sm': '8px',
		'border-radius-md': '16px',
		'border-radius-lg': '24px',
		'border-radius-none': '0px',
		'border-radius-pill': '60px',
		'border-radius-circle': '50%',
	},
	'border-width': {
		'border-width-none': '0px',
		'border-width-sm': '1px',
		'border-width-md': '2px',
		'border-width-lg': '4px',
		'border-width-xl': '8px',
	},
	'opacity-scale': {
		'opacity-none': '0%',
		'opacity-sm': '10%',
		'opacity-md': '30%',
		'opacity-lg': '50%',
		'opacity-xl': '70%',
	},
} as const;
