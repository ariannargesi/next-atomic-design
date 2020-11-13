import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	breakpoints: ['576px', '768px', '992px', '1200px', '1920px'],
	fonts: {
		body: 'Inter, sans-serif',
		heading: 'Poppins, sans-serif',
	},
	fontSizes: [12, 14, 16, 20, 24, 30, 36, 48, 60, 72],
	colors: {
		'lighter': '#F3F8FE',
		'light': '#CBE6F6',
		'normal': '#238FCD',
		'dark': '#18618B'
	},
}

export default theme
