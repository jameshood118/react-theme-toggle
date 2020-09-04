import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
border: none;
padding: 0.5rem 1rem;
text-transform: uppercase;
cursor: pointer;
outline:none;
`

const Button = ({children})=> {
return (<StyledButton>{children}</StyledButton>)
}

export default Button;