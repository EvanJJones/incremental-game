import { CHANGE_COUNT } from "../constants/actionTypes";

const initialState = {
  reduxCount: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_COUNT) {
    return state + 1;
  }
  return state;
}
export default rootReducer;
