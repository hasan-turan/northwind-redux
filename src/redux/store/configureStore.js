import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combinedReducer from "../reducers/index";
export default function configureStore() {
  const middlewares = [thunk];
  const store = createStore(combinedReducer, compose(applyMiddleware(thunk)));
  return store;
  //return createStore(combinedReducer, applyMiddleware(...middlewares));
}
