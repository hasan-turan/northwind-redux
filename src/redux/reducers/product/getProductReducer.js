import * as actionTypes from "../../actions/actionTypes";
import initialState from "../../store/initialState";

export default function getProductReducer(
  state = initialState.product,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
