import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html #root {
        margin: 0;
        padding: 0;
        width: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
