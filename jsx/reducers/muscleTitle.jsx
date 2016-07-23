const initialState = {
  selected: "Muscle Tracking App",
  highlight: "absCore"
}

export default function muscleTitle(state = initialState, action) {
  switch (action.type) {
    case "SET_MUSCLE_TITLE":
      return Object.assign({}, state, {selected: action.title});
    case "HIGHLIGHT_MUSCLE_TITLE":
      return Object.assign({}, state, {highlight: action.title});
    default:
      return state;
  }
}
