import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// app
import App from './App';
// global provier
import {GlobalProvider} from '../src/context/mainContext';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
<GlobalProvider>
  <Router>
    <App/>
  </Router>
</GlobalProvider>,
  document.getElementById('root')
);
