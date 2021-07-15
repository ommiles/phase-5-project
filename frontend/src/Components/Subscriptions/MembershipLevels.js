import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartState, toggleLoginState } from '../../Actions/toggleAction';

function MembershipLevels(props) {
  const dispatch = useDispatch();
  const creatorMembershipLevels = props.subscriptions.filter(
    subscription =>
      subscription.subscribee.username === props.match.params.username
  );
  const currentUser = useSelector(state => state.login.currentUser);

  let history = useHistory();

  const handleClick = subscription_id => {
    console.log(subscription_id);
    if (Object.keys(currentUser).length === 0) {
      history.push('/login')
      dispatch(toggleLoginState())
    } else {
      history.push(`/checkout/${subscription_id}`)
      dispatch(toggleCartState())
    }
  };

  return (
    <div>
      <h1>Select a Membership Level:</h1>
      {creatorMembershipLevels.slice(0, 5).map(subscription => (
        <div key={subscription.id}>
          <h3>
            {subscription.title.charAt(0).toUpperCase() +
              subscription.title.slice(1)}
          </h3>
          <h3>$ {subscription.cost}</h3>
          <img src={subscription.img_url} alt='subscription-thumbnail'></img>
          <h4>{subscription.membership_level}</h4>
          {props.match.params.username !== currentUser.username ? (
            <button onClick={() => handleClick(subscription.id)}>Join</button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default withRouter(MembershipLevels);
