export const fetchSubscriptions = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SUBSCRIPTIONS_REQUEST" });
    fetch("http://localhost:3000/api/v1/subscriptions")
      .then((resp) => resp.json())
      .then((subscriptions) =>
        dispatch({ type: "FETCH_SUBSCRIPTIONS_SUCCESS", subscriptions })
      );
  };
};

export const fetchAddSubscription = (subscription) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SUBSCRIPTIONS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cost: subscription.cost,
        title: subscription.title,
        img_url: subscription.img_url,
        membership_level: subscription.membership_level,
        subscription_status: subscription.subscription_status,
        subscriber_id: subscription.subscriber_id,
        subscribee_id: subscription.subscribee_id,
      }),
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then((subscription) => dispatch({ type: "FETCH_SUBSCRIPTIONS_SUCCESS", subscription }));
  };
};

export const deleteSubscription = (subscription_id) => {
  return (dispatch) => {
    dispatch({ type: "START_SUBSCRIPTIONS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/v1/subscriptions/${subscription_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then((data) => {
        console.log(data);
        dispatch({ type: "DELETE_SUBSCRIPTION_SUCCESS", subscription_id });
      });
  };
};
