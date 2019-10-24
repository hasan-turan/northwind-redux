//  method: "POST", // *GET, POST, PUT, DELETE, etc.
//  mode: "cors", // no-cors, *cors, same-origin
//  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//  credentials: "omit", // include, *same-origin, omit
//  headers: {
//    "Content-Type": "application/json" //  // 'Content-Type': 'application/x-www-form-urlencoded',
//  },
//  body: JSON.stringify(product)
import alertify from "alertifyjs";

export const post = (url, params) => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(params.data)
    })
      .then(response => handleResponse(response, dispatch, params.actionType))
      .catch(error => handleError(error));
  });
};

export const put = (url, params) => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(url + "/" + params.data, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(params.data)
    })
      .then(response =>
        handleResponse(response, resolve, dispatch, params.actionType)
      )
      .catch(error => handleError(error, reject));
  });
};

export const get = (url, params) => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response =>
        handleResponse(response, resolve, dispatch, params.actionType)
      )
      .catch(error => handleError(error, reject));
  });
};

export async function handleResponse(response, resolve, dispatch, actionType) {
  if (response.ok) {
    response.json().then(data => {
      dispatch({
        type: actionType,
        payload: data
      });
      resolve(data);
      alertify.success("Ok");
    });
  }

  const error = await response.text();
  throw new Error(error);
}

export async function handleError(error, dispatch) {
  console.log(error);
  //   return new Promise((resolve, reject) => {
  //     reject(error);
  //   });
  alertify.error(error);
}
