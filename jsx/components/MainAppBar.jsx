// === LIBRARY ===
import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class MainAppBar extends React.Component {
  render() {
    return (
      <AppBar
        title='Core Abs'
        iconClassNameRight="fa fa-angle-up"
      />
    )
  }
}
