import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// app
import App from './App';
// global provier
import {GlobalProvider} from '../src/context/mainContext';

ReactDOM.render(
<GlobalProvider>
  <App/>
</GlobalProvider>,
  document.getElementById('root')
);
