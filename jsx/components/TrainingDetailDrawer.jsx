import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default () => (
  <Drawer
    width={200}
    openSecondary
    docked={false}
    open={window.store.getState().trainingDetailDrawer.open}
    zDepth={0}
  >
    <MenuItem onTouchTap={() => window.store.dispatch({ type: 'TOGGLE_DRAWER_OPEN', open: false })}>
      Close Drawer
    </MenuItem>
  </Drawer>
);
