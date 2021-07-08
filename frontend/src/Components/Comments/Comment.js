import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../Actions/commentsAction";

export default function Comment(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment(props.comment.id));
  };
  console.log(props);
  return (
    <div style={{ border: "5px solid black", margin: "5px" }}>
      <p>{props.comment.comment_content}</p>
      {props.comment.user.id === props.currentUser.id ? (
        <button onClick={handleDelete}>X</button>
      ) : null}
    </div>
  );
}
