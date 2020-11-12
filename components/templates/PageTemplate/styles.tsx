import styled from 'styled-components'
import { maxWidth } from 'styled-system'

interface MaxWidthProp {
	maxWidth: [string, string, number, number, number]
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 16px;
	min-height: 100vh;
	box-sizing: border-box;
`

export const Navigation = styled.nav`
	width: 100%;
`

export const Header = styled.header`
	align-self: center;
	display: flex;
	padding: 0 4rem;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	${maxWidth};
`

export const Content = styled.section<MaxWidthProp>`
	width: 100%;
	padding: 0 20px;

	@media screen and (min-width: 768px) {
		padding: 0 20px;
		margin: 0 auto;
	}
	${maxWidth};
`

export const Footer = styled.footer`
	margin-top: auto;
`
