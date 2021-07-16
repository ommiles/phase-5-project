import React from 'react';

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <div className='form-group'>
      <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label className='pb3' htmlFor='is_creator'>
            Are you signing up as a content creator?
          </label>
          <input
            className='form-control bt-0 bl-0 br-0 bb f3 gray'
            id='is_creator'
            name='is_creator'
            type='is_creator'
            //   placeholder="Enter is_creator"
            value={props.is_creator}
            onChange={props.handleChange}
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>
      </div>
      <button className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'>Sign up</button>
    </div>
  );
}
