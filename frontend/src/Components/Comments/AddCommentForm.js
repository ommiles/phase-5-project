import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import GoBackButton from '../GoBackButton';
import { fetchAddComment } from '../../Actions/commentsAction';

export default function AddCommentForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_id = useSelector(state => state.login.currentUser.id);
  const post_id = props.post_id;
  const [comment_content, setCommentContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchAddComment({
        user_id,
        post_id,
        comment_content,
      })
    );
    history.push(`/posts/${post_id}`);
  };

  const handleChange = e => {
    setCommentContent(e.target.value);
  };

  return (
    <div className='w-100 flex flex-column justify-center items-center soehne-breit-leicht ph7' 
    // style={{ width: '750px'}}
    >
      <p>Not ready to share your comment?</p>
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
            value={comment_content}
            className='bt-0 bl-0 br-0 bb f3 gray mt5'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>
        <input
          type='submit'
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          value='Submit Comment'
        />
      </form>
    </div>
  );
}
