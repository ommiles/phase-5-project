import React from 'react';

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className='form-group'>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='first_name'>First Name</label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='first_name'
          name='first_name'
          type='text'
          placeholder='Enter first_name'
          value={props.first_name}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
        <label className='pb3' htmlFor='last_name'>Last Name</label>
        <input
          className='form-control bt-0 bl-0 br-0 bb f3 gray'
          id='last_name'
          name='last_name'
          type='text'
          placeholder='Enter last_name'
          value={props.last_name}
          onChange={props.handleChange}
          style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
        />
      </div>
    </div>
  );
}
