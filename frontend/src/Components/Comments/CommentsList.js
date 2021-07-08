import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Comment from "./Comment";

export default function CommentsList(props) {
  console.log(props);
  const history = useHistory();
  const currentUser = useSelector((state) => state.login.currentUser);
  console.log(currentUser);

  const handleAddComment = () => {
    // user must be logged in to comment
    // grab post id (props.id)
    // grab user id (state.login.currentUser.id)
    // save comment content (textarea input)
    history.push(`/posts/${props.id}/comment`);
  };

  return (
    <div>
      <h1>Here are the comments!</h1>
      {props.comments
        .filter((comment) => comment.post.id === props.id)
        .map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            currentUser={currentUser}
          />
        ))}
      {Object.keys(currentUser).length === 0 ? null : (
        <div>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      )}
    </div>
  );
}
