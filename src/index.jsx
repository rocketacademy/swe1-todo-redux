import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { StoreProvider } from './store'
import App from './components/App'

document.title = 'Todo App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <CssBaseline />
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
