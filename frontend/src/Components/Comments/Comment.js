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
    <div className=''>
      <p className='soehne-breit-leicht w6 mv4 mh5'>{props.comment.comment_content}</p>
      {props.comment.user.id === props.currentUser.id ? (
        <div>
          <button onClick={handleDelete} className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'>X</button>
          <button onClick={handleEditComment} className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'>Edit Comment</button>
        </div>
      ) : null}
    </div>
  );
}
