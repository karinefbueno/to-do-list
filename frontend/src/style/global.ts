import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Cutive', serif;
    font-weight: 400; 
    font-style: normal; 

  }

  :focus {
    outline: none;
  }

  body {
    height: 100%;
    /* background-color: rgba(1, 13, 17); */
   
  }
`;
