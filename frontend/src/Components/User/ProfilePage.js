import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import MembershipLevels from '../Subscriptions/MembershipLevels';
import { useSelector } from 'react-redux';

function ProfilePage(props) {
  const usersRequest = useSelector(state => state.users.loading);
  const loginRequest = useSelector(state => state.login.loading);
  const users = useSelector(state => state.users.users);

  if (loginRequest === true || usersRequest === true) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    const url_username = props.match.params.username;

    return (
      <div className=''>
        {users
          .filter(user => user.username === url_username)
          .map((user, index) =>
            user.is_creator ? (
              <div key={index} className=''>
                <div className='relative'>
                  <h1 className='f1-m f-headline-l soehne-breit-leicht mt0 mb6 pb5'>
                    {user.username.charAt(0).toUpperCase() +
                      user.username.slice(1)}{' '}
                    :
                  </h1>
                  <img
                    src={user.avatar}
                    alt='profile'
                    className='br-100 relative z-4'
                    style={{
                      top: '20%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></img>
                  <img
                    src={user.banner}
                    alt='profile'
                    className='center relative'
                    style={{
                      top: '20%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      marginTop: '-260px',
                    }}
                  ></img>
                </div>
                <p
                  className='f3 mt0 pt2 pb4 tc domaine-tx-light'
                  style={{ marginTop: '-90px' }}
                >
                  {user.bio}
                </p>
                <div
                  className='domaine-sans-fine-thin f2-l bt bb pv5 tc'
                  style={{ marginTop: '100px' }}
                >
                  <Link
                    className='link black b f2-m f1-l w-70-l mv5-l pt3-l'
                    style={{ marginTop: '200px' }}
                    to={`/${url_username}/posts`}
                  >
                    Check Out My Posts ☞
                  </Link>
                </div>
                <MembershipLevels />
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
