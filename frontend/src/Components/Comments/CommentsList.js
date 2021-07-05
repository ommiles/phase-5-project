import React from "react";
import Comment from "./Comment";

export default function CommentsList(props) {
  console.log(props);
  return (
    <div>
      <h1>Here are the comments!</h1>
      {props.comments
        .filter((comment) => comment.post.id === props.id)
        .map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
}
