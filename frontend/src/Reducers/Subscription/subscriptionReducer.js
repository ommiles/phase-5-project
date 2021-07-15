const initialState = {
  subscriptions: [],
  loading: false,
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
        error: false,
        loading: false,
        subscriptions: action.subscriptions,
      };
    case "FETCH_SUBSCRIPTION_SUCCESS":
      return {
        loading: false,
        subscriptions: [...state.subscriptions, action.subscription],
        error: false,
      };
    case "FETCH_SUBSCRIPTIONS_FAILURE":
      return {
        loading: false,
        error: true,
        subscriptions: [],
      };
    // case "EDIT_SUBSCRIPTION_SUCCESS":
    //   if (state.subscriptions.findIndex) {
    //     let index = state.subscriptions.findIndex(
    //       (subscription) => subscription.id === action.subscription.id
    //     );
    //     return {
    //       subscriptions: [
    //         ...state.subscriptions.slice(0, index),
    //         action.subscription,
    //         ...state.subscriptions.slice(index + 1),
    //       ],
    //       loading: false,
    //       error: false,
    //     };
    //   } else {
    //     return { ...state, loading: false, error: false };
    //   }
    case "DELETE_SUBSCRIPTION_SUCCESS":
      if (state.subscriptions.findIndex) {
        let index = state.subscriptions.findIndex(
          (subscription) => subscription.id === action.subscription_id
        );
        return {
          subscriptions: [
            ...state.subscriptions.slice(0, index),
            ...state.subscriptions.slice(index + 1),
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
