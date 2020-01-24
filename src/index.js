/*
JOSEPH P. PASAOA
INDEX Component | Portfolio Site
*/


/* IMPORTS */
    // external
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';

    // local
    import './reset.css';
    import './index.css';
    import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
