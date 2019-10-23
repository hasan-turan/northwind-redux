import { combineReducers } from "redux";
import selectCategoryReducer from "./selectCategoryReducer";
import listCategoryReducer from "./listCategoryReducer";
import getProductReducer from "./getProductReducer";
const combinedReducer = combineReducers({
  selectCategoryReducer,
  listCategoryReducer,
  getProductReducer
});

export default combinedReducer;
