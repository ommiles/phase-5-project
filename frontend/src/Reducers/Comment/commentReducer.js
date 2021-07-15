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
        // ...state,
        loading: false,
        error: true,
        comments: [],
      };
    case "FETCH_COMMENT_SUCCESS":
      return {
        // ...state,
        loading: false,
        error: false,
        comments: [...state.comments, action.comment],
      };
    case "EDIT_COMMENT_SUCCESS":
      if (state.comments.findIndex) {
        let index = state.comments.findIndex(
          (comment) => comment.id === action.comment.id
        );
        return {
          comments: [
            ...state.comments.slice(0, index),
            action.comment,
            ...state.comments.slice(index + 1),
          ],
          loading: false,
          error: false,
        };
      } else {
        return { ...state, loading: false, error: false };
      }
    case "DELETE_COMMENT_SUCCESS":
      if (state.comments.findIndex) {
        let index = state.comments.findIndex(
          (comment) => comment.id === action.comment_id
        );
        return {
          comments: [
            ...state.comments.slice(0, index),
            ...state.comments.slice(index + 1),
          ],
          loading: false,
          error: false,
        };
      } else {
        return { ...state, loading: false, error: false };
      }
    default:
      return state;
  }
}
