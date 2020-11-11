import { FC } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 0.5rem;

`

interface InputProps {
    value?: string,
    onChange?: (e) => void 
}

const Input: FC<InputProps> = (props) => {
    return <StyledInput {...props} />
} 

export default Input 




