import * as actionTypes from "./actionTypes";
import * as api from "./api";
import { resolve } from "dns";
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

export const insertProduct = product => dispatch => {
  // api.post("http://localhost:3000/products", {
  //   data: product,
  //   actionType: actionTypes.INSERT_PRODUCT
  // });

  let url = "http://localhost:3000/products";
  let response = fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(response => {
      console.log("response");
      return response.json();
    })
    .then(data => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT,
          payload: data
        });
        resolve(data);
      });
    })
    .catch(error => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

export const updateProduct = product => dispatch => {
  let url = "http://localhost:3000/products";
  let response = fetch(url + "/" + product.id, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(response => {
      console.log("response");
      return response.json();
    })
    .then(data => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT,
          payload: data
        });
        resolve(data);
      });
    })
    .catch(error => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

export const getProduct = id => {
  const url = "http://localhost:3000/products?id=" + id;
  // api.get("http://localhost:3000/products?id=" + id, {
  //   actionType: actionTypes.GET_PRODUCT
  // });

  return function(dispatch) {
    try {
      console.log("1**");
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          return dispatch({
            type: actionTypes.GET_PRODUCT,
            payload: data
          });
        });
    } catch (error) {
      console.error(error);
      return dispatch({
        type: actionTypes.GET_PRODUCT,
        payload: {}
      });
    }
  };
};
