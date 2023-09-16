import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Lato', sans-serif;
    }

    *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
    }
`;

export default GlobalStyle;