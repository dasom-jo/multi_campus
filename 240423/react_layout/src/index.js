import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // ThemeProvider 추가
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette:{
    bgColor : { main: 'rgba(140, 165, 165, 1)' },
    mainColor : { main: 'rgba(140, 2, 2, 1)' },
    fontColor : { main: 'rgba(89, 1, 1, 1)' },
    subcolor1 : { main: 'rgba(63, 1, 1, 1)' },
    subcolor2 : { main: 'rgba(216, 58, 58, 1)' }
  }
});


root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
  {/* // <React.StrictMode> */}
    <App />
    </ThemeProvider>

  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
