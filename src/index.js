import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
