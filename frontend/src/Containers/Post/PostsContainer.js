import React from "react";
import { withRouter } from "react-router-dom";
import PostsList from "../../Components/Post/PostsList";
import Post from "../../Components/Post/Post";
import { useSelector } from "react-redux";

function PostsContainer(props) {
  // For a post to be "visible"
  // the post's membership_level must be equal to
  // the membership_level of all subscriptions whose
  // subscribee_id === state.login.currentUser.id

  let userId = useSelector((state) => state.login.currentUser.id);

  // filteredArr returns the posts that the logged in user has access to
  let allowedPosts = props.subscriptions.filter(
    (subscription) => subscription.subscribee_id === userId
  );

  console.log(useSelector((state) => state.login.currentUser.id));
  console.log(props.subscriptions);
  // console.log(filteredArr);

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
            <PostsList post={post} key={post.id} allowedPosts={allowedPosts} />
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
