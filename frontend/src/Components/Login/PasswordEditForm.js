import React, { useState } from 'react';
import { fetchPasswordEdit } from '../../Actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
// need to decode token to find user_id
// library found here: https://github.com/auth0/jwt-decode
import jwt_decode from 'jwt-decode';
import { toggleLoginState } from '../../Actions/toggleAction';

function PasswordEditForm(props) {
  const dispatch = useDispatch();
  dispatch(toggleLoginState());
  const usersLoading = useSelector(state => state.users.loading);
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const token = props.match.params.token;
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const handleChange = e => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.name === 'password_confirmation') {
      setPasswordConfirmation(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchPasswordEdit({
        id,
        token,
        password,
        password_confirmation,
      })
    );
    if (window.confirm('Password has been reset.  Please login.'))
      history.push('/login');
  };

  if (usersLoading === true || props.users.length === 0) {
    return <h1>App loading</h1>;
  } else {
    if (props.users.some(user => user.id === id)) {
      return (
        <
          // className='w-100 flex flex-column justify-center items-center soehne-breit-leicht'
          // style={{ width: '750px' }}
        >
          <form
            onSubmit={handleSubmit}
            // className='w-100'
            style={{ width: '1250px'}}
            className='w-100 flex flex-column justify-center items-center mb4 mh5 f1 f3-m f2-l soehne-breit-leicht absolute'
          >
            <div className='flex flex-column items-center f1 f3-m f2-l soehne-breit-leicht mv4'>
              <label className='pb3' htmlFor='password'>
                Password
              </label>
              <input
                type='text'
                name='password'
                onChange={handleChange}
                value={password}
                className='bt-0 bl-0 br-0 bb f3 gray mt5'
                style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
              />
            </div>
            <div className='flex flex-column items-center f1 f3-m f2-l soehne-breit-leicht mv4'>
              <label className='pb3' htmlFor='password_confirmation'>
                Password Confirmation
              </label>
              <input
                type='text'
                name='password_confirmation'
                onChange={handleChange}
                value={password_confirmation}
                className='bt-0 bl-0 br-0 bb f3 gray mt5'
                style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
              />
            </div>
            <input
              type='submit'
              value='Reset Password'
              className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
            />
          </form>
        </>
      );
    } else {
      alert('User does not exist.  Please close window.');
    }
  }
}

export default withRouter(PasswordEditForm);
