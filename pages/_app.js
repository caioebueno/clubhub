/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'

// GLOBAL STYLES
import GlobalStyles from '../styles/globalStyles'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
