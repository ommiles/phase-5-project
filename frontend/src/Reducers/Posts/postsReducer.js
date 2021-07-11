const initialState = {
  posts: [],
  loading: false,
  error: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        posts: [],
      };
    case "EDIT_POST_SUCCESS":
      if (state.posts.findIndex) {
        let index = state.posts.findIndex(
          (post) => post.id === action.post.id
        );
        return {
          posts: [
            ...state.posts.slice(0, index),
            action.post,
            ...state.posts.slice(index + 1),
          ],
          loading: false,
          error: false,
        };
      } else {
        return { ...state, loading: false, error: false };
      }
      case "DELETE_POST_SUCCESS":
      if (state.posts.findIndex) {
        let index = state.posts.findIndex(
          (post) => post.id === action.post_id
        );
        return {
          posts: [
            ...state.posts.slice(0, index),
            ...state.posts.slice(index + 1),
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
