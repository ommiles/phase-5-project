import React, { useState, useEffect } from 'react';
import { getPasswordFetch } from '../../Actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginState } from '../../Actions/toggleAction';
import { useHistory, withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';

function PasswordResetForm(props) {
  console.log(props);
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
    console.log('mounted');
    if (
      props.match.path === '/reset/success' &&
      templateParams.message !== 'http://localhost:3001/password/reset/'
    ) {
      handleReset();
    }
    console.log('unmounted');
  }, []);

  const handleReset = () => {
    // emailjs.init('user_CZ8AxCf2hgq23IKcpjfYS');
    console.log(templateParams);

    // emailjs.send('service_wollzph', 'template_89vbj9f', templateParams).then(
    //   function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   function (error) {
    //     console.log('FAILED...', error);
    //   }
    // );
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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              value={email}
            />
          </div>
          <input type='submit' value='Send Reset Email' />
        </form>
      </div>
    );
  }
}

export default withRouter(PasswordResetForm);
