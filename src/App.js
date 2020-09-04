import React from 'react'

import { ThemeProvider } from 'styled-components'
import {useDarkMode} from './components/useDarkMode'
import GlobalStyle from './theme/globalStyles'
import {lightTheme, darkTheme} from './theme/theme'

import Button from './components/Button'
import Title from './components/Title'
import Container from './components/Container'

const App = () => {
    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Container theme={theme} toggleTheme={themeToggler}>
        <Title theme={theme} toggleTheme={themeToggler}>eNotaryLog Test</Title>
        <Button theme={theme} toggleTheme={themeToggler}>Toggle Theme</Button>
        </Container>
        </ThemeProvider>
    )
};

export default App