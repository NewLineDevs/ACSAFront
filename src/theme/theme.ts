import { ThemeProvider, createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#044f4a',
        },
        secondary: {
            main: '#000f0e',
        },

    },
    typography: {
        fontFamily: 'Ubuntu',
    },


})

export { ThemeProvider }
