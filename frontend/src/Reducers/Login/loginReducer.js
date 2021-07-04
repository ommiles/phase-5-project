// START_LOGIN_REQUEST
// UPDATE_USERNAME
// UPDATE_PASSWORD
// ERROR_MESSAGE
// LOGIN_USER

console.log(loginReducer.getState);

const initialState = {
  currentUser: {},
  requesting: false,
  error: false,
  username: "",
  password: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOGIN_REQUEST":
      return {
        ...state,
        requesting: true,
        // username:,
        // password:,
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        error: true,
        requesting: false,
      };
    case "LOGIN_USER":
      return { ...state, currentUser: action.user, error: false, requesting: false };
    default:
      return state;
  }
}
