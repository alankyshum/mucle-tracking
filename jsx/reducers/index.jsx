import { combineReducers } from 'redux';

import muscleTitle from './muscleTitle.jsx';
import appBar from './appBar.jsx';
import trainingDetailDrawer from './trainingDetailDrawer.jsx';

export default combineReducers({
  muscleTitle,
  appBar,
  trainingDetailDrawer
});
