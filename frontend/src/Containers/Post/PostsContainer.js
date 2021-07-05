import React from "react";
import { withRouter } from "react-router-dom";
import Post from "../../Components/Post/Post";

function PostsContainer(props) {
  const username = props.match.params.username;
  const capitalizedUsername =
    username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <div>
      <h1>This is the Posts Container.</h1>
      <h2>Currently viewing: {capitalizedUsername}</h2>
      {props.posts
        .filter((post) => post.user.username === username)
        .map((post) => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  );
}

export default withRouter(PostsContainer);
