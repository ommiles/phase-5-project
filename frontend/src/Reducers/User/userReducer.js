const initialState = {
  user: {},
  requesting: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'EXAMPLE_CASE':
      return {
        ...state,
        requesting: true,
      };
    default:
      return state;
  }
}