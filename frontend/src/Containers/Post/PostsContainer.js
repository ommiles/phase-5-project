import React from "react";
import { withRouter } from "react-router-dom";
import PostsList from "../../Components/Post/PostsList";
import Post from "../../Components/Post/Post";

function PostsContainer(props) {

  if (props.match.path === "/:username/posts") {
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
            <PostsList post={post} key={post.id} />
          ))}
      </div>
    );
  }

  if (props.match.path === "/posts/:id") {
    const id = parseInt(props.match.params.id);
    return (
      <div>
        {props.posts
          .filter((post) => post.id === id)
          .map((post) => (
            <Post post={post} key={post.id} comments={props.comments} id={id} />
          ))}
      </div>
    );
  }
}

export default withRouter(PostsContainer);
