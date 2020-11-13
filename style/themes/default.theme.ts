import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	breakpoints: ['576px', '768px', '992px', '1200px', '1920px'],
	fonts: {
		body: 'Inter, sans-serif',
		heading: 'Poppins, sans-serif',
	},
	fontSizes: [12, 14, 16, 20, 24, 30, 36, 48, 60, 72],
	colors: {
		'blue-200': '#BED7FA',
		'blue-300': '#93B8F9',
		'blue-400': '#6596FB',
		'blue-500': '#3772FF',
		'blue-600': '#215AF0',
		'blue-700': '#0237E1',
		'blue-800': '#001FCE',
		'blue-900': '#0011A0',
		'lighter': '#F3F8FE',
		'light': '#CBE6F6',
		'normal': '#238FCD',
		'dark': '#18618B'
	},
}

export default theme
