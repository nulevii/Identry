/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#E3000F',
				secondary: '#365B9A',
				tertiary: '#FCD20B',
				gray: '#808080',
				gainsboro: '#DCDCDC',
				whiteSmoke: '#F5F5F5',
				white: '#FFFFFF',
				success: '#4CAF50',
				danger: '#E65050',
				warning: '#F2A635',
				info: '#4B9BE8',
				link: '#0F6AFF',
				background: '#FBFBFB',
				black: {
					100: '#263238',
					16: '#2d2d2d29',
					8: '#2d2d2d14',
				},
			},
			boxShadow: {
				inputShadow: '0px 8px 16px rgba(227, 0, 15, 0.04)',
				buttonShadow: '0px 8px 16px rgba(227, 0, 15, 0.16)',
				popupShadow: '0px 8px 16px rgba(227, 0, 15, 0.04)',
			},
		},
	},
	plugins: [],
};
