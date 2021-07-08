const initialState = {
  comments: [],
  loading: false,
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
    case "FETCH_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        comments: [...state.comments, action.comment],
      };
    default:
      return state;
  }
}
