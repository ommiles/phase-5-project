import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleHomeState, toggleLoginState, toggleSignupState } from '../../Actions/toggleAction';

export default function Menu() {
    const dispatch = useDispatch()
  return (
    <div className='mt5 mb5 w-100 fixed flex right-0 bottom-0 top-0 flex-column justify-around items-center'>
      <div>
        <a className='f1 pv5 pointer w-100 bb black domaine-sans-fine-thin' onClick={() => dispatch(toggleHomeState())} >Home</a>
      </div>
      <div>
        <a className='f1 pv5 pointer w-100 bb black domaine-sans-fine-thin' onClick={() => dispatch(toggleLoginState())}>Login</a>
      </div>
      <div>
        <a className='f1 pv5 pointer w-100 black domaine-sans-fine-thin' onClick={() => dispatch(toggleSignupState())}>Sign Up</a>
      </div>
    </div>
  );
}
