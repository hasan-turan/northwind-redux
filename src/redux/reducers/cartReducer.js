import * as actionTypes from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const addedItem = state.find(
        cartItem => cartItem.product.id === action.payload.id
      );

      /**
       * forEach(): The forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array.
       * This callback is allowed to mutate the calling array.
       *
       * map(): The map() method will also call a provided function on every element in the array.
       * The difference is that map() utilizes return values and actually returns a new Array of the same size.
       *
       * let arr = [1, 2, 3, 4, 5];
       * arr.forEach((num, index) => {
       *     return arr[index] = num * 2;
       *   });
       *  //result  arr = [2, 4, 6, 8, 10]
       *
       * let doubled = arr.map(num => {
       *    return num * 2;
       *  });
       * // doubled = [2, 4, 6, 8, 10]
       */
      /**
       * for difference between forEach and map
       * go to https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
       */

      //if product is already added to cart
      //increment its quantity by 1
      if (addedItem) {
        const newState = state.map(cartItem => {
          //if product is already add to cart
          if (cartItem.product.id === addedItem.product.id) {
            //increase its quantity by 1
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          //if not added before return item from map
          return cartItem;
        });

        return newState;
      } else {
        return [
          ...state,
          {
            product: action.payload,
            quantity: 1
          }
        ];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState = state.filter(c => c.product.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
