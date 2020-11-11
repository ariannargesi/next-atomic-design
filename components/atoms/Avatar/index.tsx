import styled from 'styled-components'

interface AvatarProps {
    src: string, 
    width?: number,
    height?: number,
    rounded?: boolean  
}

const Avatar = styled.img<AvatarProps>`
    ${props => props.rounded && 'border-radius: 100% ' };
    ${props => props.width && 'width: ' + props.width };
    ${props => props.width && 'width: ' + props.width };
    ${props => props.height && 'height: ' + props.height };

    border: 1px solid black;

`

export default Avatar


