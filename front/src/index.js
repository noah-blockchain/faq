import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  ::-webkit-scrollbar { 
    width: 0px; 
    background: transparent;  
  }
  * {
	  margin: 0;
	  padding: 0;
  }
  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    max-width: 100vw;
    height: 100%;
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

ReactDOM.render(
    <>
    <GlobalStyle />
    <App />
  </>, 
document.getElementById("root"));
