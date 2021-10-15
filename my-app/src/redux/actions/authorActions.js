import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// thunk: this signature adds dispatch as arg.
// we no longer have to pass dispatch ourselves
export function loadCourses() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((err) => {
        throw err;
      });
  };
}
