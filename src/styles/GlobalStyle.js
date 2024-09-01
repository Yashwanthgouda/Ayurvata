// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
