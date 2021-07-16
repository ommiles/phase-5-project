import React from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { toggleLoginState } from '../../Actions/toggleAction';
import LoginForm from '../../Components/Login/LoginForm';
import { useDispatch, useSelector } from 'react-redux';

function LoginContainer(props) {
  const dispatch = useDispatch();
  dispatch(toggleLoginState());
  const history = useHistory();
  const handlePasswordReset = () => {
    history.push('/password/reset');
  };
  const currentUser = useSelector(state => state.login.currentUser);

  return (
    <div>
      {/* <LoginForm error={props.error} history={props.history} /> */}
      {Object.keys(currentUser).length > 0 ? (
        <h1 className='domaine-sans-fine-thin ttu tc'>
          You're already logged in, silly :)
        </h1>
      ) : (
        <div>
          <LoginForm error={props.error} history={props.history} />
          <button onClick={handlePasswordReset} className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light' >Forgot Your Password?</button>
        </div>
      )}
    </div>
  );
}

export default withRouter(LoginContainer);
