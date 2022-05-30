import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.font};
  }

  #page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyles;
