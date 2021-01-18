import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Helmet } from 'react-helmet';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>FXLIB</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

