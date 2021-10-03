// state = [] means the primary state of state (!) is an empty array
export default function userReducer(state = [], action) {
  switch (action.name) {
    case "ADD_USER":
      // state must be immutable so we need to create a copy of the state, modify it and return it.
      // The new copy becomes the new state.
      return [...state, { ...action.user }];

    default:
      return state;
  }
}
