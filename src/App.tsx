import React from 'react'
import { ThemeProvider } from '@mui/material'

import { Layout } from './theme/Layout'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme/theme'
import { AppRoutes } from './shared/routes'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

