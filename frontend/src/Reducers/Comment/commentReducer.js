const initialState = {
  comments: [],
  requesting: false,
  error: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        comments: [],
      };
    default:
      return state;
  }
}
