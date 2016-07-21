export default function muscleTitle(state = "Muscle Tracking App", action) {
  switch (action.type) {
    case "SET_MUSCLE_TITLE":
      return action.text;
    default:
      return state;
  }
}
