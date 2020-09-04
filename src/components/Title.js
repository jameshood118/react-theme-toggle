import React from 'react'
import {func, string} from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h1`
color: ${({theme})=> theme.titleTextColor};
margin-bottom:2rem;`

const Title = ({theme, toggleTheme, children})=> {
return (<StyledTitle>{children}</StyledTitle>)
}

Title.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Title