export default {
	sm: {
		resolutions: {
			min: '0px',
			max: '600px',
		},
		columns: 4,
		margin: '24px',
		gutter: '16px',
		row: '8px',
		container: {
			width: 'auto',
			maxWidth: '100%',
		},
	},
	md: {
		resolutions: {
			min: '600px',
			max: '900px',
		},
		columns: 8,
		margin: '24px',
		gutter: '24px',
		row: '8px',
		container: {
			width: 'auto',
			maxWidth: '100%',
		},
	},
	lg: {
		resolutions: {
			min: '900px',
			max: '1200px',
		},
		columns: 12,
		margin: '24px',
		gutter: '24px',
		row: '8px',
		container: {
			width: 'auto',
			maxWidth: '840px',
		},
	},
	xl: {
		resolutions: {
			min: '1200px',
			max: '1536px',
		},
		columns: 12,
		margin: '24px',
		gutter: '24px',
		row: '8px',
		container: {
			width: 'auto',
			maxWidth: '1116px',
		},
	},
} as const;
