import styled, {withTheme} from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-common-types'
import './fontawesome'

interface IconProps {
	icon: string
	size?: string
	counter?: string | number,
	pointer?: boolean,
	color?: string
    onClick?: () => void
}

const Badge = styled.span`
	color: white;
	background: ${themeGet('colors.blue-600')};
	color: white;
	width: 22px;
	padding: 3px 0;
	display: inline-block;
	text-align: center;
	border-radius: 100%;
	border: 2px solid white;
    font-size: 12px;
    position: absolute;
    right: -13px;
    top: -11px;
    `

const Icon: React.FC<IconProps> = (props) => {
	const iconName = props.icon as IconName

	return (
		<span style={{ position: 'relative'}}>
			{/* @ts-ignore */}
			<FontAwesomeIcon icon={['fas', iconName]} size={props.size} cursor={ props.pointer && 'pointer'} onClick={props.onClick} color={props.color} />
			{props.counter && <Badge>{props.counter}</Badge>}
		</span>
	)
}

// @ts-ignore
export default withTheme(Icon)
