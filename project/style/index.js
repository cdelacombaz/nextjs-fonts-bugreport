import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Caveat";
      font-style: normal;
      font-weight: 400 700;
      font-display: optional;
      src: url(/fonts/Caveat-VariableFont_wght.woff2) format("woff2");
    }
    body {
        // adding display: flex here creates a flash of the fallback font
        display: flex;
        font-family: 'Caveat', Arial;
        //margin: 0;
        //padding: 0;
    }
`

export const defaultTheme = {
    primaryColor: '#e04130',
}
