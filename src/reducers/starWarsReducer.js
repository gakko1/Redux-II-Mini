import /* we need our action types here*/ '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, String fetching, String fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
