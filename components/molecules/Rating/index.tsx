import { FC } from 'react'
import { withTheme } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Wrapper, IconWrapper } from './styles'

import Icon from '../../atoms/Icon'
import {Span} from '../../atoms/Text'
interface RatingProps {
    icon?: string,
    activeColor?: string, 
    disableColor?: string,
    size?: string 
    total?: number,
    fill?: number
}

const Rating: FC<RatingProps> = props => {

    const {
        icon,
        activeColor,
        disableColor,
        total,
        fill
    } = props 

    const renderIcons = () => {
        const icons = []
        for(let c = 1; c<= total; c++){
            icons.push(
                <Icon icon={icon}  color={ c < fill+1 ? activeColor : disableColor} size='sm' />
            )
        }
        return icons
    } 
    
    return (
        <Wrapper>
            {
                renderIcons().map( item => <IconWrapper>{item}</IconWrapper>)
            }
        </Wrapper>
    )
}

export default Rating

Rating.defaultProps = {
    icon: 'start',
    size: 'sm',
    total: 5,
    fill: 3 ,
    activeColor: 'black',
    disableColor: 'red'
}