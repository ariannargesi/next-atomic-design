import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const Wrapper = styled.div`
	background-color: white;
	height: 60px;
	width: 100%;
	border-bottom: 1px solid rgba(72, 94, 144, 0.16);
	padding: 0 20px;
	display: grid;
	align-items: center;
	@media screen and (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}
`
export const ImageWrapper = styled.div`
	width: 100px;
	height: 36px;
`

export const LinkWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	margin-top: 1rem;
	color: ${themeGet('colors.blue-600')};
	border-top: 1px solid ${themeGet('colors.blue-200')};
	border-bottom: 1px solid ${themeGet('colors.blue-200')};
	& > * {
		border-right: 1px solid ${themeGet('colors.blue-200')};
	}
	& > :last-child {
		border-right: none;
	}
`

export const ExtraWrapper = styled.div`
	justify-self: end;
`
