import * as actionTypes from "./actionTypes";
import * as api from "./api";
export function listProducts(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) url += "?categoryId=" + categoryId;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return dispatch({
          type: actionTypes.LIST_PRODUCTS,
          payload: data
        });
      });
  };
}

export const insertProduct = product => {
  api.post("http://localhost:3000/products", {
    data: product,
    actionType: actionTypes.INSERT_PRODUCT
  });
};

export const updateProduct = id => {
  api.put("http://localhost:3000/products", {
    data: id,
    actionType: actionTypes.UPDATE_PRODUCT
  });
};

export const getProduct = id => {
  api.get("http://localhost:3000/products/?id=" + id, {
    actionType: actionTypes.GET_PRODUCT
  });
};
