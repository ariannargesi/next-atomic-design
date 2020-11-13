import styled from 'styled-components'
import { maxWidth } from 'styled-system'

interface MaxWidthProp {
	maxWidth: [string, string, number, number, number]
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
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
	height: 64px;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	${maxWidth};
`

export const Content = styled.section`
	display: flex;
	justify-content: center;

	@media screen and (min-width: 768px) {
	}
	${maxWidth};
`

export const Footer = styled.footer`
	margin-top: auto;
`
export const ProductsContainer = styled.div`
	max-width: 1140px;
	height: 40px;
`