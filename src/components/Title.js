import React from 'react'

import styled from 'styled-components'

const StyledTitle = styled.h1`
margin-bottom:2rem;`

const Title = ({children})=> {
return (<StyledTitle>{children}</StyledTitle>)
}

export default Title