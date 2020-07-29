import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
