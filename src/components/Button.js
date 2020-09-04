import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
border: none;
padding: 0.5rem 1rem;
text-transform: uppercase;
color: ${({primary}) =>(primary ? 'black': '#fff')};
cursor: pointer;
outline:none;
`

const Button = ({primary, children})=> {
return (<StyledButton primary={primary}>{children}</StyledButton>)
}

export default Button;