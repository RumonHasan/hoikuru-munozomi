import React from 'react';
// components
import AboutHome from './components/AboutHome';
import Home from './components/Home';
import Map from './components/Map';
import Feature from './components/Feature';
import InfoTable from './components/InfoTable';
// material ui

import { MuiThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core';
import MainColorThemes from '../src/style/mainTheme';

const App = ()=> {
  const {muiTheme} = MainColorThemes();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
  <MuiThemeProvider theme={theme}>
    <div className = 'app'>
        <Home/>
        <AboutHome/>
        <Feature/>
        <InfoTable/>
        <Map/>
    </div>
  </MuiThemeProvider>

  );
}

export default App;
