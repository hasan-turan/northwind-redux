import * as actionTypes from "../../actions/actionTypes";
import initialState from "../../store/initialState";

export default function listProductReducer(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case actionTypes.LIST_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
