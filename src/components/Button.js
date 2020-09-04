import React from 'react'
import {func, string} from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
background: ${({theme})=> theme.buttonBackgroundColor};
border: none;
padding: 0.5rem 1rem;
margin: ${({margin})=> margin || '2rem'};
text-transform: uppercase;
color: ${({theme})=> theme.buttonTextColor};
cursor: pointer;
outline:none;
`

const Button = ({theme, toggleTheme, children})=> {
return (
    <StyledButton onClick={toggleTheme}>{children}</StyledButton>
    );
}

Button.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Button;