// === LIBRARY ===
import React from 'react';
import AppBar from 'material-ui/AppBar';

export default () => (
  <AppBar
    title={window.store.getState().appBar.title}
    iconClassNameRight="fa fa-angle-up"
  />
);
