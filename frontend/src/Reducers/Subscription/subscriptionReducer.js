const initialState = {
  subscriptions: [],
  requesting: false,
  error: false,
};

export default function subscriptionsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SUBSCRIPTIONS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUBSCRIPTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        subscriptions: action.subscriptions,
      };
    case "FETCH_SUBSCRIPTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        subscription: [],
      };
    default:
      return state;
  }
}
