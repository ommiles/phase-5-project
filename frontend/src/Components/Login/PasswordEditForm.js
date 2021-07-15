import React, { useState, useEffect } from 'react';
import { fetchPasswordEdit } from '../../Actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
// need to decode token to find user_id
// library found here: https://github.com/auth0/jwt-decode
import jwt_decode from 'jwt-decode';
import { toggleHomeState, toggleLoginState } from '../../Actions/toggleAction';

function PasswordEditForm(props) {
  const dispatch = useDispatch();
  dispatch(toggleLoginState());
  const usersLoading = useSelector(state => state.users.loading)
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const token = props.match.params.token;
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  console.log(props.users)

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
    history.push('/');
    dispatch(toggleHomeState())
  };

  if (usersLoading === true || props.users.length === 0) {
    console.log('loading')
    return (
      <h1>App loading</h1>
    )
  } else {
    if (props.users.some((user) => user.id === id)) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              name='password'
              onChange={handleChange}
              value={password}
            />
          </div>
          <div>
            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input
              type='text'
              name='password_confirmation'
              onChange={handleChange}
              value={password_confirmation}
            />
          </div>
          <input type='submit' value='Reset Password' />
        </form>
      </div>
    );
    } else {
      alert('User does not exist.  Please close window.')
    }
  }
}

export default withRouter(PasswordEditForm);
