import React from 'react'
import styled, { css } from 'styled-components'
import { Wrapper} from './styled'

const StyledButton = styled.button`
border: none;
padding: 0.5rem 1rem;
margin: ${({margin})=> margin || '2rem'};
text-transform: uppercase;
color: black;
cursor: pointer;
outline:none;

${({primary}) => primary && css`
color: white;
background: black
`}
`

const Button = ({primary, margin, children})=> {
return (<Wrapper><StyledButton margin={margin} primary={primary}>{children}</StyledButton></Wrapper>);
}

export default Button;