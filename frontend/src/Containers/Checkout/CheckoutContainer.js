import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { fetchAddSubscription } from '../../Actions/subscriptionsAction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHomeState } from '../../Actions/toggleAction';
import Loading from '../../Components/Loading';

function CheckoutContainer(props) {
  const subscription_id = parseInt(props.match.params.id);
  const subscription = props.subscriptions.find(
    subscription => subscription.id === subscription_id
  );
  const currentUser = useSelector(state => state.login.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();
  const subscriptionsRequest = useSelector(
    state => state.subscriptions.loading
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
    history.push('/home');
    dispatch(toggleHomeState());
  };

  const goBack = () => {
    history.goBack();
    dispatch(toggleHomeState());
  };

  if (props.match.path === '/checkout') {
    return <h1 className='domaine-sans-fine-thin ttu'>Your cart is empty!</h1>;
  } else if (
    subscriptionsRequest === true ||
    Object.keys(currentUser).length === 0
  ) {
    return (
      <div className='soehne-breit-leicht f3 flex items-center justify-center vh-100 w-100 center'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className='center'>
        <p className='soehne-breit-leicht'>Not ready just yet?</p>
        <button
          onClick={goBack}
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
        >
          Go Back
        </button>
        <h2 className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          Buy {subscription.title} for ${subscription.cost}
        </h2>
        <button
          onClick={handlePurchase}
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
        >
          Purchase Subscription
        </button>
      </div>
    );
  }
}

export default withRouter(CheckoutContainer);
