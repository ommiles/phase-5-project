import React from 'react';
import CommentsList from '../Comments/CommentsList';

export default function Post(props) {
  // if props.post
  return (
    <div>
      <h1>This is the Post Component.</h1>
      <h2>{props.post.title}</h2>
      <h2>
        Author: {props.post.user.first_name} {props.post.user.last_name}
      </h2>
      <h4>{props.post.subheader}</h4>
      {/* <img src={props.post.image} alt='post' /> */}
      {props.allowed ? (
        <img src={props.post.image} alt='post' />
      ) : (
        <img src={props.post.image} alt='post' style={{ filter: "blur(10px)" }}/>
      )}
      <p>{props.post.post_content}</p>
      <p>{`This listing type is: ${props.post.listing}`}</p>
      <p>{`This post's membership level is: ${props.post.membership_level}`}</p>
      <p>{`This post's type is: ${props.post.type}`}</p>
      <CommentsList comments={props.comments} id={props.id} />
    </div>
  );
}
