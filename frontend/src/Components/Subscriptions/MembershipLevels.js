import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartState, toggleLoginState } from '../../Actions/toggleAction';

function MembershipLevels(props) {
  const dispatch = useDispatch();
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);
  const creatorMembershipLevels = subscriptions.filter(
    subscription =>
      subscription.subscribee.username === props.match.params.username
  );
  const currentUser = useSelector(state => state.login.currentUser);

  let history = useHistory();

  const handleClick = subscription_id => {
    console.log(subscription_id);
    if (Object.keys(currentUser).length === 0) {
      history.push('/login');
      dispatch(toggleLoginState());
    } else {
      history.push(`/checkout/${subscription_id}`);
      dispatch(toggleCartState());
    }
  };

  return (
    <div>
      {creatorMembershipLevels.length > 0 ? (
        <h1 className='f1-m f-headline-l soehne-breit-leicht'>
          Become a Patron:
        </h1>
      ) : null}
          <div className='flex flex-row justify-center align-center flex-wrap mb6'>
      {creatorMembershipLevels.slice(0, 5).map(subscription => (
        <div
          key={subscription.id}
          className='br2 ba dark-gray b--black-20 mv4 mw9 w-30 mh3'
        >
          <img
            src={subscription.img_url}
            alt='subscription-thumbnail'
            className='db w-100 br2 br--top'
          ></img>
          <div className='pa2 ph3-ns pb3-ns'>
            <div className='dt w-100 mt1'>
              <div className='dtc mw1 b domaine-sans-fine-thin'>
                <h3>
                  {subscription.title.charAt(0).toUpperCase() +
                    subscription.title.slice(1)}
                </h3>
              </div>
              <div className='dtc tr domaine-sans-fine-thin'>
                <h3>$ {subscription.cost}</h3>
              </div>
            </div>
            <p className='soehne-breit-leicht'>
              <h4>Membership Level {subscription.membership_level}</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
              {props.match.params.username !== currentUser.username ? (
                <button onClick={() => handleClick(subscription.id)} className='domaine-sans-fine-thin'>
                  Join
                </button>
              ) : null}
          </div>
        </div>

        // </div>
      ))}
      </div>
    </div>
  );
}

export default withRouter(MembershipLevels);
