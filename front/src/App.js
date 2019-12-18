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
    min-height: 400px;
    @media (min-width: 640px) {
      min-width:100px;
    }
  }
   blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-family: Hoefler Text,Georgia,serif;
    font-style: italic;
    margin: 16px 0;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 20px;
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