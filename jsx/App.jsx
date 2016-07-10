// === LIBRARIES ===
// --- react
import React from 'react';
import {render} from 'react-dom';
// --- material ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// --- theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// === INIT ===
injectTapEventPlugin();


// === COMPONENTS ====
import MainAppBar from './components/MainAppBar.jsx';

// === RENDERING ===
render(
  <MuiThemeProvider muiTheme={getMuiTheme({
      palette: {
        primary1Color: "#9a0000",
        primary2Color: "#E91E63",
        primary3Color: "#F8BBD0",
        accent1Color: "#4CAF50",
        textColor: "#FFFFFF",
        secondaryTextColor: "#212121",
        borderColor: "#B6B6B6",
      }
    })}>
    <MainAppBar />
  </MuiThemeProvider>
, document.getElementById('mainAppBar'));
