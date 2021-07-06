import React from "react";
import { withRouter } from "react-router-dom";
import PostsList from "../../Components/Post/PostsList";
import Post from "../../Components/Post/Post";
import { useSelector } from "react-redux";

function PostsContainer(props) {
  console.log(props)
  let id = parseInt(props.match.params.id);
  let username = props.match.params.username;
  let userId = useSelector((state) => state.login.currentUser.id);
  let capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

  let subscription = props.subscriptions.find((subscription) => subscription.subscribee_id === userId && subscription.subscriber.username === props.match.params.username);
  console.log(subscription)

  if (props.match.path === "/:username/posts") {
    return (
      <div>
        <h1>This is the Posts Container.</h1>
        <h2>Currently viewing: {capitalizedUsername}</h2>
        {props.posts
          .filter((post) => post.user.username === username)
          .map((post) => 
          <PostsList post={post} key={post.id} allowed={subscription !== undefined && subscription.subscribee_id === userId && post.membership_level <= subscription.membership_level ? true : false}  />
          )}
      </div>
    );
  }

  if (props.match.path === "/posts/:id") {
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
