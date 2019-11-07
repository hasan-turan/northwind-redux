import * as actionTypes from "./actionTypes";
export function selectCategory(category) {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: category
  };
}

export function listCategories2() {
  return function(dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: actionTypes.LIST_CATEGORIES,
          payload: data
        })
      );
  };
}

export async function listCategoriesAsync(caller) {
  console.log("Caller ", caller);
  const url = "http://localhost:3000/categories";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  });
  const data = await response.json();

  return data;
}

export function listCategories(caller) {
  console.log("Caller ", caller);
  return function(dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: actionTypes.LIST_CATEGORIES,
          payload: data
        })
      );
  };
}
