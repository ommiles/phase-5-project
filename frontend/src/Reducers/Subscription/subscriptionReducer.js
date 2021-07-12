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
