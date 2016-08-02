// === LIBRARY ===
import React from 'react';
import AppBar from 'material-ui/AppBar';

// === FUNCTIONS ===
const expandTrainingForm = () => {
  window.store.dispatch({ type: 'TOGGLE_DRAWER_OPEN', open: true });
};

// === RENDER COMPONENT ===
export default () => (
  <AppBar
    title={window.store.getState().appBar.title}
    iconClassNameRight={`fa fa-angle-${window.store.getState().trainingDetailDrawer.open ? 'left' : 'right'}`}
    onTitleTouchTap={expandTrainingForm}
  />
);
