import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from 'hooks'
import Routes from 'routes'

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
)

export default App
