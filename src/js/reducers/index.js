const initialState = {
  all: []
};
function rootReducer(state = initialState, action) {
  var newstate;
  switch (action.type) {
    case "SET_TASKS":
      var data = action.payload;
      newstate = { all: data };
      break;

    default:
      newstate = state;
      break;
  }
  return newstate;
}
export default rootReducer;
