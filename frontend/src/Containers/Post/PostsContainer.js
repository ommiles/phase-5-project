import React from 'react';
import { withRouter } from 'react-router-dom';
import PostsList from '../../Components/Post/PostsList';
import Post from '../../Components/Post/Post';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading';

function PostsContainer(props) {
  const currentUser = useSelector(state => state.login.currentUser);
  const userId = useSelector(state => state.login.currentUser.id);
  const usersRequest = useSelector(state => state.users.loading);
  const postsRequest = useSelector(state => state.posts.loading);
  const commentsRequest = useSelector(state => state.comments.loading);
  const subscriptionsRequest = useSelector(
    state => state.subscriptions.loading
  );

  if (props.match.path === '/:username/posts') {
    if (
      postsRequest === true ||
      commentsRequest === true ||
      subscriptionsRequest === true ||
      usersRequest === true
    ) {
      return (
        <div className='soehne-breit-leicht f3 flex items-center justify-center vh-100 w-100 center'>
          <Loading />
        </div>
      );
    } else {
      const username = props.match.params.username;
      const capitalizedUsername =
        username.charAt(0).toUpperCase() + username.slice(1);
      const subscription = props.subscriptions.find(
        subscription =>
          subscription.subscriber_id === userId &&
          subscription.subscribee.username === username
      );

      // does the logged in user have any subscriptions
      // do any of those subscription.subscribee.id of the post author
      // if so, what membership level are those / that subscription(s)
      // the user can see posts

      return (
        <div>
          {/* <h1>This is the Posts Container.</h1> */}
          <h2 className='f1 f1-m f-headline-l soehne-breit-leicht mb4 mt0'>
            Posts by {capitalizedUsername}:
          </h2>
          {props.posts
            .filter(post => post.user.username === username)
            .map(post => (
              <PostsList
                post={post}
                key={post.id}
                allowed={
                  (subscription !== undefined &&
                    post.membership_level <= subscription.membership_level) ||
                  post.listing === 'allow_list'
                    ? true
                    : false
                }
              />
            ))}
        </div>
      );
    }
  }

  if (props.match.path === '/posts/:id') {
    if (
      postsRequest === true ||
      commentsRequest === true ||
      subscriptionsRequest === true ||
      usersRequest === true
    ) {
      return (
        <div className='soehne-breit-leicht f3 flex items-center justify-center vh-100 w-100 center'>
          <Loading />
        </div>
      );
    } else {
      const id = parseInt(props.match.params.id);
      const username = props.match.params.username;
      const subscription = props.subscriptions.find(
        subscription =>
          subscription.subscriber_id === userId &&
          subscription.subscribee.username === username
      );
      return (
        <div>
          {props.posts
            .filter(post => post.id === id)
            .map(post => (
              <Post
                post={post}
                key={post.id}
                comments={props.comments}
                id={id}
                allowed={
                  (subscription !== undefined &&
                    post.membership_level <= subscription.membership_level) ||
                  post.listing === 'allow_list'
                    ? true
                    : false
                }
              />
            ))}
        </div>
      );
    }
  }
}

export default withRouter(PostsContainer);
