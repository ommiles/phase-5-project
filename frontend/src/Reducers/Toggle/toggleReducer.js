const initialState = {
  toggleHome: true,
  toggleSignup: false,
  toggleLogin: false,
  toggleCart: false,
  toggleMenu: false,
};

export default function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_HOME':
      return {
        ...state,
        toggleHome: true,
        toggleSignup: false,
        toggleLogin: false,
        toggleCart: false,
      };
    case 'TOGGLE_SIGNUP':
      return {
        ...state,
        toggleHome: false,
        toggleSignup: true,
        toggleLogin: false,
        toggleCart: false,
      };
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        toggleHome: false,
        toggleSignup: false,
        toggleLogin: true,
        toggleCart: false,
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        toggleHome: false,
        toggleSignup: false,
        toggleLogin: false,
        toggleCart: true,
      };
    case 'TOGGLE_MENU':
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    default:
      return state;
  }
}
