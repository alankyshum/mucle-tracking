// =================
// === LIBRARIES ===
// =================
// --- react
import React from 'react';
import { render } from 'react-dom';
// --- material ui
// import injectTapEventPlugin from 'react-tap-event-plugin';
// --- theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// --- store
import { createStore } from 'redux';
import reducer from './reducers/index.jsx';
window.store = createStore(reducer);

// === COMPONENTS ====

// === INIT ===
// injectTapEventPlugin();


// ===============
// === SCREENS ===
// ===============
// === TrainingDetailsScreen ===
import MainAppBar from './components/MainAppBar.jsx';
import MuscleContainer from './components/MuscleContainer.jsx';
import TrainingDetailDrawer from './components/TrainingDetailDrawer.jsx';
const TrainingDetailsScreen = () => (
  <div>
    <MainAppBar />
    <MuscleContainer />
    {/* <TrainingDetailDrawer /> */}
  </div>
);


// ================
// === MAIN APP ===
// ================
const MuscleTrackingApp = () => (
  <TrainingDetailsScreen className="screen" />
);

const renderApp = () => {
  render(
    <MuiThemeProvider
      muiTheme={getMuiTheme({
        palette: {
          primary1Color: '#9a0000',
          primary2Color: '#E91E63',
          primary3Color: '#F8BBD0',
          accent1Color: '#4CAF50',
          textColor: '#545454',
          secondaryTextColor: '#212121',
          borderColor: '#B6B6B6'
        }
      })}
    >
      <MuscleTrackingApp />
    </MuiThemeProvider>
  , document.getElementById('muscleTrackingApp'));
};

renderApp();
window.store.subscribe(renderApp);
