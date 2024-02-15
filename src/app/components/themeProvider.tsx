'use client'

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5f9bce',
    },
    secondary: {
      main: '#5f9bce',
    },
    text: {
      primary: '#5f9bce',
      secondary: 'black',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {},
})

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
