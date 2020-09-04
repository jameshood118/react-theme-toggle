import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
border: none;
padding: 0.5rem 1rem;
text-transform: uppercase;
color: black;
cursor: pointer;
outline:none;

${({primary}) => primary && css`
color: white;
background: black
`}
`

const Button = ({primary, children})=> {
return (<StyledButton primary={primary}>{children}</StyledButton>)
}

export default Button;