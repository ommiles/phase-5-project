import React, { useState } from 'react';
import GoBackButton from '../GoBackButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUserEdit } from '../../Actions/usersAction';
import Loading from '../Loading';

export default function EditProfileForm(props) {
  const usersLoading = useSelector(state => state.users.loading);
  const postsLoading = useSelector(state => state.posts.loading);
  const commentsLoading = useSelector(state => state.comments.loading);
  const subscriptionsLoading = useSelector(
    state => state.subscriptions.loading
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const id = props.currentUser.id;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/home');
    dispatch(
      fetchUserEdit({
        //   TODO: HOW TO HANDLE  EMPTY FIELDS ""
        //   username === "" ? setUsername(props.currentUser.username) : null;
        id,
        username,
        email,
        first_name,
        last_name,
      })
    );
    alert('Your account has been updated.');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'first_name':
        setFirstName(e.target.value);
        break;
      case 'last_name':
        setLastName(e.target.value);
        break;
      default:
        break;
    }
  };

  if (
    usersLoading === true ||
    postsLoading === true ||
    commentsLoading === true ||
    subscriptionsLoading === true
  ) {
    return <div className='soehne-breit-leicht f3 flex items-center justify-center vh-100 w-100 center'><Loading/></div>;
  } else {
    return (
      <div className='ph7'>
        <GoBackButton />
        <form onSubmit={handleSubmit}>
          <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4 ph2'>
            <label htmlFor='username' className='pb3'>Username</label>
            <input
              type='text'
              name='username'
              
              onChange={handleChange}
              value={username}
              className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
            />
          </div>
          <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
            <label htmlFor='email' className='pb3'>Email</label>
            <input
              type='text'
              name='email'
              
              onChange={handleChange}
              value={email}
              className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
            />
          </div>
          <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
            <label htmlFor='first_name' className='pb3'>First Name</label>
            <input
              type='text'
              name='first_name'
              
              onChange={handleChange}
              value={first_name}
              className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
            />
          </div>
          <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
            <label htmlFor='last_name' className='pb3'>Last Name</label>
            <input
              type='text'
              name='last_name'
              
              onChange={handleChange}
              value={last_name}
              className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
            />
          </div>
          <input
            type='submit'
            className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
            value='Submit Changes'
          />
        </form>
      </div>
    );
  }
}
