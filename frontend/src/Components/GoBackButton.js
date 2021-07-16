import React from 'react';
import { useHistory } from 'react-router-dom';

export default function GoBackButton() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button
        onClick={goBack}
        className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
      >
        Go Back
      </button>
    </div>
  );
}
