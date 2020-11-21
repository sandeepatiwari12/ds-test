import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  * {
    box-sizing: border-box;
    outline: 0
  }
  body {
    background-color: #F5F5F5;
    color: #59626A;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  a {
    color: inherit;
    text-decoration: none
  }
  .wrapper {
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
