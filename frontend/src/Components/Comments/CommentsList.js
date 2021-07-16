import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Comment from './Comment';

export default function CommentsList(props) {
  const history = useHistory();
  const currentUser = useSelector(state => state.login.currentUser);

  const handleAddComment = () => {
    history.push(`/posts/${props.id}/comment`);
  };

  return (
    <div className='mb6'>
      <h1 className='f2 lh-title domaine-sans-fine-thin'>Comments:</h1>
      {props.comments
        .filter(comment => comment.post.id === props.id)
        .map(comment => (
          <Comment
            comment={comment}
            key={comment.id}
            currentUser={currentUser}
          />
        ))}
      {Object.keys(currentUser).length === 0 ? null : (
        <div>
          <button
            onClick={handleAddComment}
            className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          >
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
}
