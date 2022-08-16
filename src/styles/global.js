import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
 }

 a, div {
    text-decoration: none;
   
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
  }

  button{
   cursor: pointer;
   outline: none;
   border: none;
   background-color: transparent;
  }
  ul{
   padding-left: 0;
   list-style: none;
  }
 
`;

export default GlobalStyle;
