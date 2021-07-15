import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import GoBackButton from "../../Components/GoBackButton";
import { fetchAddSubscription } from "../../Actions/subscriptionsAction";
import { useDispatch, useSelector } from "react-redux";
import { toggleHomeState } from "../../Actions/toggleAction";

function CheckoutContainer(props) {


  const subscription_id = parseInt(props.match.params.id);
  const subscription = props.subscriptions.find(
    (subscription) => subscription.id === subscription_id
  );
  const currentUser = useSelector((state) => state.login.currentUser);
  console.log(props);
  console.log(currentUser);
  console.log(subscription);
  console.log(subscription_id);

  const dispatch = useDispatch();
  const history = useHistory();
  const subscriptionsRequest = useSelector(
    (state) => state.subscriptions.loading
  );

  const handlePurchase = () => {
    dispatch(
      fetchAddSubscription({
        cost: subscription.cost,
        title: subscription.title,
        img_url: subscription.img_url,
        membership_level: subscription.membership_level,
        subscription_status: subscription.subscription_status,
        subscriber_id: currentUser.id,
        subscribee_id: subscription.subscribee_id,
      })
    );
    history.push("/home")
    dispatch(toggleHomeState())
  };

  // NaN is a falsy value
  // subscription_id ? null : return <h1>Your Cart is Empty</h1>

  if (props.match.path === "/checkout") {
    return(
      <h1>Your cart is empty!</h1>
    )
  } else if (subscriptionsRequest === true || Object.keys(currentUser).length === 0) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    return (
      <div>
        Not ready just yet? <GoBackButton />
        <h1>Checkout Container</h1>
        <h2>
          Buy {subscription.title} for ${subscription.cost}
        </h2>
        <button onClick={handlePurchase}>Purchase Subscription</button>
      </div>
    );
  }
}

export default withRouter(CheckoutContainer);
