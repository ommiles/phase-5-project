const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.posts,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        users: [],
      };
    default:
      return state;
  }
}
