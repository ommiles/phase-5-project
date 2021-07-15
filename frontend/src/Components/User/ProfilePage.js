import React from 'react';
import { withRouter } from 'react-router-dom';
import MembershipLevels from '../Subscriptions/MembershipLevels';
import { useSelector } from 'react-redux';

function ProfilePage(props) {
  const usersRequest = useSelector(state => state.users.loading);
  const subscriptionsRequest = useSelector(
    state => state.subscriptions.loading
  );
  const loginRequest = useSelector(state => state.login.loading);
  if (
    loginRequest === true ||
    subscriptionsRequest === true ||
    usersRequest === true
  ) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    const url_username = props.match.params.username;

    return (
      <div>
        {/* <h1>Hi! This is the Profile Page Component.</h1> */}
        {props.users
          .filter(user => user.username === url_username)
          .map((user, index) =>
            user.is_creator ? (
              <div key={index}>
                <h1>
                  Hi, I'm {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                  👋
                </h1>
                <img src={user.banner} alt='profile'></img>
                {user.is_creator ? (
                  <h3>I am a creator. </h3>
                ) : (
                  <h3>I am not a creator.</h3>
                )}
                <h5>Bio: {user.bio}</h5>
                <img src={user.avatar} alt='profile' className='br-100'></img>
                <MembershipLevels subscriptions={props.subscriptions} />
              </div>
            ) : (
              <div key={index}>
                This is falsey AKA {user.username} is not a creator.
                <h4>My id is: {user.id}</h4>
                <h5>My bio is: {user.bio}</h5>
                <h6>Username: {user.username}</h6>
              </div>
            )
          )}

        {/* <SumOfUsers /> */}
        {/* <AboutContainer /> */}
        {/* <RecentPosts /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
