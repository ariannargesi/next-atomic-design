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
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	width: 100%;
	border: 4px solid white;
	transition: 200ms;
	&:hover {
		border-bottom: 4px solid ${themeGet('colors.normal')}
	}
`
export const FooterLink = styled.a<LinkProps>`
	${fontFamily};
	${fontSize};
	line-height: 1.5;
`
