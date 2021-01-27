import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`

    html,
    body{
        height: 100%;
    }

    body {
        background: linear-gradient(290.12deg, #6A7381 -53.59%, #1C2634 31.85%, #10161E 88.51%);
        font-family: black, Serif;
        color: white;
        text-rendering: geometricPrecision;
        font-weight: 900;
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    h1{
        margin: 0px;
    }
`
 
export default GlobalStyle