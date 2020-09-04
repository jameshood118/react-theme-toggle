import React from 'react'
import styled, { css } from 'styled-components'
import { Wrapper} from './styled'

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
const SuperButton = styled(StyledButton)`
font-size: 2.5rem;
`

const Button = ({primary, children})=> {
return (
<Wrapper>
    <StyledButton primary={primary}>{children}</StyledButton>
    <SuperButton>{children}</SuperButton>
</Wrapper>
    );
}

export default Button;