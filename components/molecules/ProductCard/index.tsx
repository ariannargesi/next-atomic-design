// image text start
import { FC } from 'react'
import styled, { withTheme } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Rating from '../Rating'
import { Img } from '../../atoms/Image'
import { Heading, Span } from '../../atoms/Text'
import { Wrapper, Footer, RateWrapper } from './styles'

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = (props) => {
	return (
		<Wrapper maxWidth={['100%', 250, 263]}>
			<Img src='/img/placeholder.png' width={263} height={236} layout='fixed' />
			<Footer>
			<Heading.H5 color='normal'>HP 14 inch HD Laptop Newest for Business and Student</Heading.H5>
			<RateWrapper>
				<Rating
					icon='star'
					activeColor={themeGet('colors.normal')(props)}
					disableColor={themeGet('colors.light')(props)}
					total={4}
					fill={3}
				/>
                <Span fontSize={0}>5</Span>
			</RateWrapper>
            <Span fontSize={2}>$45</Span>
			</Footer>
		</Wrapper>
	)
}
// @ts-ignore
export default withTheme(ProductCard)

export const Container = styled.div`
	display: flex;
`