import styled from 'styled-components'
import { maxWidth } from 'styled-system'

interface MaxWidthProps {
    maxWidth: [string, number,number]
}

export const Wrapper = styled.div<MaxWidthProps>`
    height: 404px;
    margin: 0.5rem;
    ${maxWidth}
`
export const RateWrapper = styled.div`
    width: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Footer = styled.div`
    height: 168px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`