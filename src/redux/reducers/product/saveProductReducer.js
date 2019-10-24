import * as actionTypes from "../../actions/actionTypes";
import initialState from "../../store/initialState";

export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.INSERT_PRODUCT:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
