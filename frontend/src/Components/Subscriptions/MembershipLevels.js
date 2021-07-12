import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function MembershipLevels(props) {
  const creatorMembershipLevels = props.subscriptions.filter(
    (subscription) =>
      subscription.subscribee.username === props.match.params.username
  );
  const currentUser = useSelector((state) => state.login.currentUser);

  let history = useHistory();

  const handleClick = (subscription_id) => {
    // How will checkout know what the user wants to subscribe to?
    console.log(subscription_id)
    Object.keys(currentUser).length === 0
      ? history.push("/login")
      : history.push(`/checkout/${subscription_id}`);
  };

  return (
    <div>
      <h1>Select a Membership Level:</h1>
      {creatorMembershipLevels
        .slice(creatorMembershipLevels.length - 5)
        .map((subscription) => (
          <div key={subscription.id}>
            <h3>
              {subscription.title.charAt(0).toUpperCase() +
                subscription.title.slice(1)}
            </h3>
            <h3>$ {subscription.cost}</h3>
            <img src={subscription.img_url} alt="subscription-thumbnail"></img>
            <h4>{subscription.membership_level}</h4>
            {props.match.params.username !== currentUser.username ? (
              <button onClick={() => handleClick(subscription.id)}>Join</button>
            ) : null}
            {/* <button onClick={handleClick}>Join</button> */}
          </div>
        ))}
    </div>
  );
}

export default withRouter(MembershipLevels);
