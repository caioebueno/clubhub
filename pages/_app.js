/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import  { BreakpointProvider } from 'react-socks'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

// GLOBAL STYLES
import GlobalStyles from '../styles/globalStyles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000' // This is an orange looking color
        },
    }
})

function MyApp({ Component, pageProps }) {
    return (
        <BreakpointProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default MyApp
