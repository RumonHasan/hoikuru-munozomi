import React from 'react';
// components
import Header from './components/Header';
import AboutHome from './components/AboutHome';
import Home from './components/Home';
// material ui
import { CircularProgress } from '@material-ui/core';

const App = ()=> {
  return (
    <div className = 'app'>
        <Home/>
        <AboutHome/>
    </div>
  );
}

export default App;
