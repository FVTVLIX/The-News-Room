import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  // <React.StrictMode>
   <Router> 
    <App />
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Anton|Girassol|Oswald|Playfair+Display|Roboto&display=swap" rel="stylesheet" />

   </Router>, 
  // </React.StrictMode>, 
  document.getElementById('root')
);

