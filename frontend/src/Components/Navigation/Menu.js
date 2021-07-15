import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleHomeState,
  toggleLoginState,
  toggleMenu,
  toggleSignupState,
} from '../../Actions/toggleAction';
import { useHistory } from 'react-router';

export default function Menu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.login.currentUser);
  const handleHome = () => {
    Object.keys(currentUser).length > 0
      ? history.push('/home')
      : history.push('/');
    dispatch(toggleMenu());
    // dispatch(toggleHomeState())
  };
  const handleLogin = () => {
    history.push('/login');
    dispatch(toggleMenu());
    // dispatch(toggleLoginState())
  };
  const handleSignup = () => {
    history.push('/signup');
    dispatch(toggleMenu());
    // dispatch(toggleSignupState())
  };

  return (
    <div className='mt5 mb5 w-100 fixed flex right-0 bottom-0 top-0 flex-column justify-around items-center'>
      <div>
        <a
          className='f1 pv5 pointer w-100 bb black domaine-sans-fine-thin'
          onClick={handleHome}
        >
          Home
        </a>
      </div>
      <div>
        <a
          className='f1 pv5 pointer w-100 bb black domaine-sans-fine-thin'
          onClick={handleLogin}
        >
          Login
        </a>
      </div>
      <div>
        <a
          className='f1 pv5 pointer w-100 black domaine-sans-fine-thin'
          onClick={handleSignup}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
