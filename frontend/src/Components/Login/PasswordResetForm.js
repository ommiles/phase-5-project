import React, { useState, useEffect } from 'react';
import { getPasswordFetch } from '../../Actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginState } from '../../Actions/toggleAction';
import { useHistory, withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';

function PasswordResetForm(props) {
  const dispatch = useDispatch();
  dispatch(toggleLoginState());
  const history = useHistory();
  const [email, setEmail] = useState('');
  const currentUser = useSelector(state => state.login.currentUser);
  const token = useSelector(state => state.login.token);
  const templateParams = {
    name: currentUser.first_name,
    reply_to: currentUser.email,
    message: `http://localhost:3001/password/reset/${token}`,
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/reset/success');
    dispatch(getPasswordFetch(email));
  };

  useEffect(() => {
    if (
      props.match.path === '/reset/success' &&
      templateParams.message !== 'http://localhost:3001/password/reset/'
    ) {
      handleReset();
    }
  }, []);

  const handleReset = () => {
    emailjs.init('user_CZ8AxCf2hgq23IKcpjfYS');

    emailjs.send('service_wollzph', 'template_89vbj9f', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  if (props.match.path === '/reset/success') {
    return (
      <div>
        <p>
          A password reset message was sent to your email address. Please click
          the link in that message to reset your password.
        </p>

        <p>
          If you do not receive the password reset message within a few moments,
          please check your spam folder or other filtering tools.
        </p>
      </div>
    );
  } else {
    return (
      <div
      className='w-100 flex flex-column justify-center items-center soehne-breit-leicht'
      style={{ width: '750px' }}
    >
        <form onSubmit={handleSubmit} className='w-100 flex flex-column justify-center items-center mb4 mh5 f1 f3-m f2-l soehne-breit-leicht'>
        <div className='w-100 flex flex-column justify-center items-center mb4 mh5 f1 f3-m f2-l soehne-breit-leicht'>
            <label htmlFor='email' className='pb3'>Email</label>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              value={email}
              className='bt-0 bl-0 br-0 bb f3 gray mt5'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
            />
          </div>
          <input type='submit' value='Send Reset Email' className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light' />
        </form>
      </div>
    );
  }
}

export default withRouter(PasswordResetForm);
