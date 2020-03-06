/*
JOSEPH P. PASAOA
INDEX MAIN | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import './reset.css';
import './index.css';
import App from './App';


/* RENDER */
ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
