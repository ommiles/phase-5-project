import React, { useState } from 'react';
import GoBackButton from '../GoBackButton';
import { fetchEditComment } from '../../Actions/commentsAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function EditCommentForm(props) {
  const comment_id = props.comment_id;
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment_content, setCommentContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchEditComment({
        comment_id,
        comment_content,
      })
    );
    history.goBack();
  };

  const handleChange = e => {
    setCommentContent(e.target.value);
  };

  return (
    <div
      className='w-100 flex flex-column justify-center items-center soehne-breit-leicht'
      style={{ width: '750px' }}
    >
      <p>Not ready to change your comment?</p>
      <GoBackButton />
      <form onSubmit={handleSubmit} className='w-100 flex flex-column justify-center items-center mb4 mh5 f1 f3-m f2-l soehne-breit-leicht'>
      <div className='w-100 flex flex-column justify-center items-center mt6 mb4 mh5 f1 f3-m f2-l soehne-breit-leicht'>
          <label htmlFor='comment_content' className='pb3'>
            Comment:
          </label>
          <textarea
            type='text'
            name='comment_content'
            onChange={handleChange}
            // ? How to make value of current comment?
            value={comment_content}
            className='bt-0 bl-0 br-0 bb f3 gray mt5'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>
        <input
          type='submit'
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          value='Submit Edited Comment'
        />
      </form>
    </div>
  );
}
