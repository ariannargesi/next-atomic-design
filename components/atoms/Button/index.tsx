import styled, { css, withTheme } from 'styled-components'
import { borderRadius, variant } from 'styled-system'

export interface ButtonProps {
	type?: string
}

const Button = styled('button')(
	{
		padding: '0.5rem',
	},
	variant({
		prop: 'type',
		variants: {
			primary: {
				backgroundColor: 'normal',
				color: 'white'
			},
			small: {
				fontSize: 1,
				lineHeight: 'body',
			},
		},
	})
)
export default Button
