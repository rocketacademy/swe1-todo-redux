import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from './theme'
import reducer from './reducers'
import App from './components/App'

document.title = 'Todo App'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
)
