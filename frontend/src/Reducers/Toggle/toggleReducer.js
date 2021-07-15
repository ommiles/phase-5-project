const initialState = {
  toggleHome: true,
  toggleSignup: false,
  toggleLogin: false,
  toggleCart: false,
};

export default function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_HOME':
      return {
        toggleHome: true,
        toggleSignup: false,
        toggleLogin: false,
        toggleCart: false,
      };
    case 'TOGGLE_SIGNUP':
      return {
        toggleHome: false,
        toggleSignup: true,
        toggleLogin: false,
        toggleCart: false,
      };
    case 'TOGGLE_LOGIN':
      return {
        toggleHome: false,
        toggleSignup: false,
        toggleLogin: true,
        toggleCart: false,
      };
    case 'TOGGLE_CART':
      return {
        toggleHome: false,
        toggleSignup: false,
        toggleLogin: false,
        toggleCart: true,
      };
    default:
      return state;
  }
}
