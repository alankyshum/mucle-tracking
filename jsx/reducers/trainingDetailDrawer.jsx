const initialState = {
  open: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER_OPEN':
      return Object.assign({}, state, { open: action.open });
    default:
      return state;
  }
};
