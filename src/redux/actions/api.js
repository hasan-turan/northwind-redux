//  method: "POST", // *GET, POST, PUT, DELETE, etc.
//  mode: "cors", // no-cors, *cors, same-origin
//  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//  credentials: "omit", // include, *same-origin, omit
//  headers: {
//    "Content-Type": "application/json" //  // 'Content-Type': 'application/x-www-form-urlencoded',
//  },
//  body: JSON.stringify(product)
import alertify from "alertifyjs";
import { returnStatement } from "@babel/types";

export const post = (url, params) => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(params.data)
    })
      .then(response =>
        handleResponse(response, resolve, reject, dispatch, params.actionType)
      )
      .catch(error => handleError(error, reject));
  });
};

export const put = (url, params) => dispatch => {
  return new Promise((resolve, reject) => {
    console.log("action ", params.actionType);
    fetch(url + "/" + params.data, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(params.data)
    })
      .then(response =>
        handleResponse(response, resolve, reject, dispatch, params.actionType)
      )
      .catch(error => handleError(error, reject));
  });
};

export const get = (url, params) => {
  return function(dispatch) {
    try {
      debugger;
      console.log("1**");
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("2**");
          return dispatch({
            type: params.actionType,
            payload: data
          });
        });
    } catch (error) {
      console.log("3**", error);
      return dispatch({
        type: params.actionType,
        payload: {}
      });
    }
  };
};

// export const get = (url, params) => {
//   return async function(dispatch) {
//     try {
//       console.log("1**");
//       let response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "content-type": "application/json"
//         }
//       });
//       let responseJSON = await response.json();
//       console.log("2**");
//       function dispatchAction(data) {
//         dispatch({
//           type: params.actionType,
//           payload: data
//         });
//       }
//       console.log("3**");
//       return dispatchAction(await responseJSON);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// return new Promise((resolve, reject) => {
//   console.log("Promise!");
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json"
//     }
//   })
//     .then(response => {
//       console.log("success ", response);
//       return handleResponse(
//         response,
//         resolve,
//         reject,
//         dispatch,
//         params.actionType
//       );
//     })
//     .catch(error => {
//       console.log("error", error);
//       return handleError(error, reject);
//     });
// });
export async function handleResponse(
  response,
  resolve,
  reject,
  dispatch,
  actionType
) {
  if (response.error) {
    throw new Error(response.error);
  } else if (response.ok) {
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

export async function handleError(error, reject) {
  console.log(error);
  //   return new Promise((resolve, reject) => {
  //     reject(error);
  //   });
  alertify.error(error);
}
