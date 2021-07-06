export const fetchSubscriptions = () => {
    return (dispatch) => {
      dispatch({ type: "FETCH_SUBSCRIPTIONS_REQUEST" });
      fetch("http://localhost:3000/api/v1/subscriptions")
        .then((resp) => resp.json())
        .then((subscriptions) => dispatch({ type: "FETCH_SUBSCRIPTIONS_SUCCESS", subscriptions }));
    };
  };
  