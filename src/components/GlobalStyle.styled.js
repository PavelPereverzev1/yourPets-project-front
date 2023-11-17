import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --accent: #FF8356;
    --background: #FEF9F9;
    --black: #111111;
    --yellow: #FFC107;
    --blueLink: #54ADFF;
    --blueGradient: linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%);
    --blueLight: #CCE4FB;
    --red: #F43F5E;
    --green: #00C3AD;
    --gray: #888888;
    --white: #FFFFFF;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: var(--background);
    color: var(--black);
  }

  a {
    color: var(--blueLink);
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input, button, textarea, select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
