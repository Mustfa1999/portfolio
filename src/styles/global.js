import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

`;

export default GlobalStyle;
