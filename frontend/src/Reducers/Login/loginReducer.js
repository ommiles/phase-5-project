const initialState = {
  currentUser: {},
  requesting: false,
  error: false,
  username: "",
  password: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        requesting: true,
        // username:,
        // password:,
      };
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: action.user,
        error: false,
        requesting: false,
      };
    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        error: true,
        requesting: false,
      };
    default:
      return state;
  }
}
