import { combineReducers } from "redux";
import selectCategoryReducer from "./selectCategoryReducer";
import listCategoryReducer from "./listCategoryReducer";
import getProductReducer from "./product/getProductReducer";
import saveProductReducer from "./product/saveProductReducer";

import cartReducer from "./cartReducer";
const combinedReducer = combineReducers({
  selectCategoryReducer,
  listCategoryReducer,
  getProductReducer,
  cartReducer,
  saveProductReducer
});

export default combinedReducer;
