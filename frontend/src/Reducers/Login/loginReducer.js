const initialState = {
  currentUser: {},
  loading: false,
  error: false,
  // username: "",
  // password: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        // username:,
        // password:,
      };
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: action.user,
        error: false,
        loading: false,
      };
    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "LOGOUT_REQUEST":
      return {
        currentUser: {},
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
