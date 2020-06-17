import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    min-width: 110%;
  }
  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Roboto','Arial';
    color: #000000;
  }
  button {
    cursor: pointer;
  }
`;
