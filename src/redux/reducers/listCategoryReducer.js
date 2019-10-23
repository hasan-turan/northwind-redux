import * as actionTypes from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function listCategoryReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case actionTypes.LIST_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
