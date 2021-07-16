import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) { 
  console.log(props);
  return (
    <div>
      <Link
      className='f1'
      to={`/posts/${props.post.id}`}
      >{props.post.title}</Link>
      <h2>
        Author: {props.post.user.first_name} {props.post.user.last_name}
      </h2>
      <h4>{props.post.subheader}</h4>
      {props.allowed ? (
        <img src={props.post.image} alt="post" />
      ) : (
        <img
          src={props.post.image}
          alt="post"
          style={{ filter: "blur(10px)" }}
        />
      )}
      <p>{props.post.post_content}</p>
      <p>{`This listing type is: ${props.post.listing}`}</p>
      <p>{`This post's membership level is: ${props.post.membership_level}`}</p>
      <p>{`This post's type is: ${props.post.type}`}</p>
    </div>
  );
}
