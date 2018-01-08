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
    <MenuItem>
      Close Drawer
    </MenuItem>
  </Drawer>
);
