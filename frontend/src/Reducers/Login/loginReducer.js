const initialState = {
  currentUser: {},
  loading: false,
  error: false,
  token: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
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
      case "FETCH_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
      case "FETCH_PASSWORD_SUCCESS":
      return {
        currentUser: action.data.user,
        token: action.data.jwt,
        error: false,
        loading: false,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        currentUser: {},
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
