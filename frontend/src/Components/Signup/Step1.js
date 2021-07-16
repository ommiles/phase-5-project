import React from 'react';

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='form-group'>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='username'>
          Username
        </label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='username'
          name='username'
          type='text'
          placeholder='Enter username'
          value={props.username}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='email'>
          Email address
        </label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='email'
          name='email'
          type='email'
          placeholder='Enter email'
          value={props.email}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='password'>
          Password
        </label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='password'
          name='password'
          type='password'
          placeholder='Create a New Password'
          value={props.password}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='password_confirmation'>
          Confirm Password
        </label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='password_confirmation'
          name='password_confirmation'
          type='password'
          placeholder='Confirm password'
          value={props.password_confirmation}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
    </div>
  );
}
