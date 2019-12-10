import React from "react";
import { createGlobalStyle } from 'styled-components';
import { FAQquery } from "./containers";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    min-width:900px;
  }
  html { 
    position:relative; 
    min-height:100%;
   }
`;

export const App = props => {
  return (
      <div>
        <GlobalStyle />
        <FAQquery />
      </div>
    );
}
export default App;