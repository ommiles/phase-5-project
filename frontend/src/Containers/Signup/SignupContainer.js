import React from 'react';
import { toggleSignupState } from '../../Actions/toggleAction';
import SignupForm from '../../Components/Signup/SignupForm';
import { useSelector, useDispatch } from 'react-redux';

export default function SignupContainer(props) {
  const dispatch = useDispatch();
  dispatch(toggleSignupState());
  const currentUser = useSelector(state => state.login.currentUser);
  return (
    <div>
      {Object.keys(currentUser).length > 0 ? (
        <h1 className='domaine-sans-fine-thin ttu tc'>
          You already have an account, silly :)
        </h1>
      ) : (
        <SignupForm />
      )}
    </div>
  );
}
