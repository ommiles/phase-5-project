import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import MembershipLevels from '../Subscriptions/MembershipLevels';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

function ProfilePage(props) {
  const usersRequest = useSelector(state => state.users.loading);
  const loginRequest = useSelector(state => state.login.loading);
  const users = useSelector(state => state.users.users);

  if (loginRequest === true || usersRequest === true) {
    return (
      <div className='soehne-breit-leicht f3 flex items-center justify-center vh-100 w-100 center'>
        <Loading />
      </div>
    );
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
                  className='f4 mv0 soehne-breit-leicht tc w-80 center'
                  style={{ marginTop: '-30px' }}
                >
                  {/* {user.bio} */}I began coding at the age of two and have
                  loved it ever since. Please become a patron so you can access
                  my coaching and refactoring services and view my live
                  code-alongs!
                </p>
                <div
                  className='soehne-breit-leicht f2-l bt bb pv5 tc'
                  style={{ marginTop: '100px' }}
                >
                  <Link
                    className='link black b f2-m f1-l w-70-l mv5-l pt3-l'
                    style={{ marginTop: '200px' }}
                    to={`/${url_username}/posts`}
                  >
                    Check Out My Posts
                  </Link>
                </div>
                <MembershipLevels />
              </div>
            ) : (
              <div key={index}>
                This is falsey AKA {user.username} is not a creator.
                <h4>My id is: {user.id}</h4>
                <h5>
                  I began coding at the age of two and have loved it ever since.
                  Please become a patron so you can access my cocahing and
                  refactoring services and view my live code-alongs!{' '}
                </h5>
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
