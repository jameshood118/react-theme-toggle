import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Title from './components/Title'
import Container from './components/Container'

const App = () => {
    return (
    <Container>
        <Title>eNotaryLog Test</Title>
        <Button primary margin="5rem">Toggle Theme</Button>
        <Button>Toggle Theme</Button>
    </Container>
    )
};

export default App