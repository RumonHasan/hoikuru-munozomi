import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import AboutHome from './components/AboutHome';
import Home from './components/Home';
import Map from './components/Map';
import Feature from './components/Feature';
import InfoTable from './components/InfoTable';
import Footer from './components/Footer';
// material ui
import { MuiThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core';

const App = ()=> {
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
          <Footer/>
      </div>
  </MuiThemeProvider>

  );
}

export default App;
