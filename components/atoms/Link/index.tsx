import styled from 'styled-components'
import  { themeGet } from '@styled-system/theme-get'
import { color, fontFamily, fontSize, fontWeight, lineHeight } from 'styled-system'

interface LinkProps {
	href: string
}

export const NavLink = styled.a<LinkProps>`
	${color};
	${fontFamily};
	${fontSize};
	${fontWeight};
	${lineHeight};
	display: block;
	width: 100%;
	padding: 1rem;
	border: 4px solid white;
	text-align: center;
	transition: 200ms;
	backface-visibility: hidden;
	&:hover {
		border-bottom: 4px solid ${themeGet('colors.blue-600')}
	}
`
export const FooterLink = styled.a<LinkProps>`
	${fontFamily};
	${fontSize};
	line-height: 1.5;
`
