import { combineReducers } from "redux";
import selectCategoryReducer from "./selectCategoryReducer";
import listCategoryReducer from "./listCategoryReducer";
import listProductReducer from "./product/listProductReducer";
import saveProductReducer from "./product/saveProductReducer";
import getProductReducer from "./product/getProductReducer";

import cartReducer from "./cartReducer";
const combinedReducer = combineReducers({
  selectCategoryReducer,
  listCategoryReducer,
  listProductReducer,
  getProductReducer,
  saveProductReducer,
  cartReducer
});

export default combinedReducer;
