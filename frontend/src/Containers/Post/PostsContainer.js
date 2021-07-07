import React from "react";
import { withRouter } from "react-router-dom";
import PostsList from "../../Components/Post/PostsList";
import Post from "../../Components/Post/Post";
import { useSelector } from "react-redux";

function PostsContainer(props) {
  const userId = useSelector((state) => state.login.currentUser.id);
  const usersRequest = useSelector((state) => state.users.loading);
  const postsRequest = useSelector((state) => state.posts.loading);
  const commentsRequest = useSelector((state) => state.comments.loading);
  const subscriptionsRequest = useSelector((state) => state.subscriptions.loading);

  if (props.match.path === "/:username/posts") {
    if (
      postsRequest === true ||
      commentsRequest === true ||
      subscriptionsRequest === true ||
      usersRequest === true
    ) {
      return <div>Hold tight while items are being fetched...</div>;
    } else {
      const username = props.match.params.username;
      const capitalizedUsername =
        username.charAt(0).toUpperCase() + username.slice(1);
      const subscription = props.subscriptions.find(
        (subscription) =>
          subscription.subscribee_id === userId &&
          subscription.subscriber.username === username
      );

      return (
        <div>
          <h1>This is the Posts Container.</h1>
          <h2>Currently viewing: {capitalizedUsername}</h2>
          {props.posts
            .filter((post) => post.user.username === username)
            .map((post) => (
              <PostsList
                post={post}
                key={post.id}
                allowed={
                  subscription !== undefined &&
                  subscription.subscribee_id === userId &&
                  post.membership_level <= subscription.membership_level
                    ? true
                    : false
                }
              />
            ))}
        </div>
      );
    }
  }

  if (props.match.path === "/posts/:id") {
    if (
      postsRequest === true ||
      commentsRequest === true ||
      subscriptionsRequest === true ||
      usersRequest === true
    ) {
      return <div>Hold tight while items are being fetched...</div>;
    } else {
      const id = parseInt(props.match.params.id);
      return (
        <div>
          {props.posts
            .filter((post) => post.id === id)
            .map((post) => (
              <Post
                post={post}
                key={post.id}
                comments={props.comments}
                id={id}
              />
            ))}
        </div>
      );
    }
  }
}

export default withRouter(PostsContainer);
