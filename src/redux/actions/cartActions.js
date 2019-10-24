import * as actionTypes from "./actionTypes";
// export function addToCart(product) {
//   return {
//     type: actionTypes.ADD_TO_CART,
//     payload: product
//   };
// }

// export function removeFromCart(product) {
//     return {
//       type: actionTypes.REMOVE_FROM_CART,
//       payload: product
//     };
//   }

export const addToCart = product => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
    resolve("Success");
  });
};

export const removeFromCart = product => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: product
    });
    resolve("Success");
  });
};
