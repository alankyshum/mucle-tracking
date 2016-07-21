// === LIBRARY ===
import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class MainAppBar extends React.Component {
  render() {
    return (
      <AppBar
        title={this.props.muscleTitle}
        iconClassNameRight="fa fa-angle-up"
      />
    )
  }
}
