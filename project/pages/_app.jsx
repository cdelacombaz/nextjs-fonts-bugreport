import {ThemeProvider} from 'styled-components'

import {GlobalStyle, defaultTheme} from '../style'

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
