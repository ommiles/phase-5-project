import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../Actions/commentsAction";

export default function Comment(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteComment(props.comment.id));
  };

  const handleEditComment = () => {
    history.push(`/comments/${props.comment.id}/edit`)
  };

  return (
    <div  className=' w6 mv4 mh5'>
      <div className='flex items-center ma0'>
      <img className='br-100 mr3' src={props.comment.user.avatar} style={{ width: '3rem', height: '3rem'}}></img>
      <h3 className='soehne-breit-leicht'>{props.comment.user.username}:</h3>
      </div>
      <p className='soehne-breit-leicht w5 center ma0'>{props.comment.comment_content}</p>
      {props.comment.user.id === props.currentUser.id ? (
        <div className='indent'>
          <button onClick={handleDelete} className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'>X</button>
          <button onClick={handleEditComment} className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'>Edit Comment</button>
        </div>
      ) : null}
    </div>
  );
}
