import * as actionTypes from "./actionTypes";
export function selectCategory(category) {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: category
  };
}

export function listCategories() {
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
