import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import Theme from "./theme/Theme";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)