import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducer from "../reducers/index";
export default function configureStore() {
  const middlewares = [thunk];
  return createStore(combinedReducer, applyMiddleware(...middlewares));
}
