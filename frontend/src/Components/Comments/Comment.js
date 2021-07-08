import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../Actions/commentsAction";

export default function Comment(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  // TODO: COMMENT IS DELETING FROM THE RENDER, NOT THE DB!
  const handleDelete = () => {
    dispatch(deleteComment(props.comment.id));
  };

  const handleEditComment = () => {
    history.push(`/posts/${props.comment.post.id}/edit_comment`);
  };
  console.log(props);
  return (
    <div style={{ border: "5px solid black", margin: "5px" }}>
      <p>{props.comment.comment_content}</p>
      {props.comment.user.id === props.currentUser.id ? (
        <div>
          <button onClick={handleDelete}>X</button>
          <button onClick={handleEditComment}>Edit Comment</button>
        </div>
      ) : null}
    </div>
  );
}
