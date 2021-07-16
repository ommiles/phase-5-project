import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Actions/loginAction';
import { toggleLoginState } from '../../Actions/toggleAction';

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(toggleLoginState)
  };

  return (
    <div className='mv3'>
      <Link
        to='/login'
        className='link black f2 soehne-breit-extraleicht'
        onClick={handleLogout}
      >
          Logout
      </Link>
    </div>
  );
}
