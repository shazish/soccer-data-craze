import * as types from "./actionTypes";
import * as coursesApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// thunk: this signature adds dispatch as arg.
// we no longer have to pass dispatch ourselves
export function loadCourses() {
  return function (dispatch) {
    return coursesApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((err) => {
        throw err;
      });
  };
}
