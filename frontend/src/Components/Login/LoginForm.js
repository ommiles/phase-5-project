import React, { useState } from 'react';
import { fetchLogin } from '../../Actions/loginAction';
import { useDispatch } from 'react-redux';
import { toggleHomeState } from '../../Actions/toggleAction';

export default function LoginForm(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchLogin({ username, password }));
    props.history.push('/home');
    dispatch(toggleHomeState());
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className=''>
        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='username' className='pb3'>
            Username
          </label>
          <input
            type='text'
            name='username'
            className='bt-0 bl-0 br-0 bb f3 gray'
            onChange={handleChange}
            value={username}
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>
        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='password' className='pb3'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='bt-0 bl-0 br-0 bb f3 gray'
            onChange={handleChange}
            value={password}
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
        />
      </form>
    </div>
  );
}
