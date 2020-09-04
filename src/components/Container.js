import React from 'react'
import {func, string} from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
background: ${({theme}) => theme.containerBackgroundColor};
width:100%;
margin: 0 auto;
padding:2rem;
`

const Container = ({theme, toggleTheme, children})=> {
return (<StyledContainer>{children}</StyledContainer>)
}

Container.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Container