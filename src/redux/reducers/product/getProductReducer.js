import * as actionTypes from "../../actions/actionTypes";
import initialState from "../../store/initialState";

export default function getProductReducer(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
