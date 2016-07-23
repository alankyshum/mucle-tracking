const initialState = {
  title: 'Muscle Tracking App'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_APP_TITLE':
      return Object.assign({}, state, { title: action.title });
    default:
      return state;
  }
};
