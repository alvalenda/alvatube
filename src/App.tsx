import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Button from './components/Button'
import ThemeButton from './components/ThemeButton'
import { Title } from './components/Title'
import { TalespireContext } from './shared/contexts/talespire/TalespireContext'
import { themeObject as theme } from './shared/theme/theme.config'

function App() {
  const { darkMode } = useContext<{ darkMode: boolean }>(
    TalespireContext as any
  )
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: darkMode
            ? theme.colors.primaryDark
            : theme.colors.primaryLight,

          secondary: darkMode
            ? theme.colors.secondaryDark
            : theme.colors.secondaryLight,

          background: darkMode
            ? theme.colors.backgroundDark
            : theme.colors.backgroundLight,

          backgroundVar: darkMode
            ? theme.colors.backgroundVarDark
            : theme.colors.backgroundVarLight,

          buttonPrimary: darkMode
            ? theme.colors.buttonPrimaryDark
            : theme.colors.buttonPrimaryLight,

          buttonSecondary: darkMode
            ? theme.colors.buttonSecondaryDark
            : theme.colors.buttonSecondaryLight,

          interactive: darkMode
            ? theme.colors.interactiveDark
            : theme.colors.interactiveLight,

          inlineError: darkMode
            ? theme.colors.inlineErrorDark
            : theme.colors.inlineErrorLight,

          buttonText: theme.colors.buttonText,
          buttonDisabled: theme.colors.buttonDisabled,
          disabledText: theme.colors.disabledText,
        },
        fonts: {
          ...theme.fonts,
        },

        fontSizes: {
          ...theme.fontSizes,
        },
      }}
    >
      <div className="App">
        <Title />
        <Button>Faço Nada</Button>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default App
