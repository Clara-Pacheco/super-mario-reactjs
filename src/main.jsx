import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme.js'
import GlobalStyles from './Styles/global.js'

import { App } from './Pages/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
