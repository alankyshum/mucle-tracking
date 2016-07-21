// =================
// === LIBRARIES ===
// =================
// --- react
import React from 'react';
import { render } from 'react-dom';
// --- material ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// --- theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// --- store
import { createStore } from 'redux';
import reducer from './reducers/index.jsx';
const store = createStore(reducer);

// === COMPONENTS ====

// === INIT ===
injectTapEventPlugin();

// ===============
// === SCREENS ===
// ===============
// === TrainingDetailsScreen ===
import MainAppBar from './components/MainAppBar.jsx';
import MuscleContainer from './components/MuscleContainer.jsx';
class TrainingDetailsScreen extends React.Component {
  render() {
    return (
      <div>
        <MainAppBar muscleTitle={store.getState().muscleTitle} />
        <MuscleContainer updateMuscleTitle={(newTitle) => store.dispatch({type: "SET_MUSCLE_TITLE", text: newTitle})}/>
      </div>
    )
  }
}

// ================
// === MAIN APP ===
// ================
export class MuscleTrackingApp extends React.Component {
  render() {
    return (
      <TrainingDetailsScreen className='screen'/>
    )
  }
}

const renderApp = () => {
  render(
    <Provider store={store}>
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
        <MuscleTrackingApp />
      </MuiThemeProvider>
    </Provider>
    , document.getElementById('muscleTrackingApp'));
}

renderApp();
store.subscribe(renderApp);
