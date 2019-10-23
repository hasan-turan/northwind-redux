import * as actionTypes from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function selectCategoryReducer(
  state = initialState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
