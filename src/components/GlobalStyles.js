import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/yourPets-project-front/fonts/Manrope-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/yourPets-project-front/fonts/Manrope-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/yourPets-project-front/fonts/Manrope-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/yourPets-project-front/fonts/Manrope-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: 'Manrope';
    src: local('Manrope'), url('/yourPets-project-front/fonts/Manrope-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), url('/yourPets-project-front/fonts/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), url('/yourPets-project-front/fonts/Inter-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

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
    --boxShadowDefault: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    --boxShadowHover: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
    --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

   input, button, textarea, select {
    font: inherit;
  }
`;
