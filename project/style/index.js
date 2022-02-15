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
        // comment out display: flex to get rid of the bug
        display: flex;
        font-family: 'Caveat', Arial;
    }
`

export const defaultTheme = {
    primaryColor: '#e04130',
}
