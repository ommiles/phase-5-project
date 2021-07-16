import React from 'react';
import DeleteProfile from '../User/DeleteProfile';
import EditProfile from './EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { deletePost } from '../../Actions/postsAction';
import { deleteSubscription } from '../../Actions/subscriptionsAction';
import Logout from './Logout';

export default function Homepage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const subscriptionsRequest = useSelector(
    state => state.subscriptions.loading
  );
  const postsRequest = useSelector(state => state.posts.loading);

  const creators = useSelector(state =>
    state.users.users.filter(user => user.is_creator === true)
  );

  const handleAddPost = () => {
    const username = props.currentUser.username;
    history.push(`/${username}/add_post`);
  };

  const handleDelete = post_id => {
    dispatch(deletePost(post_id));
  };

  const handleDeleteSubscription = subscription_id => {
    dispatch(deleteSubscription(subscription_id));
  };

  if (
    Object.keys(props.currentUser).length === 0 ||
    subscriptionsRequest === true ||
    postsRequest === true
  ) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    const currentUserSubscriptions = props.subscriptions.filter(
      subscription => subscription.subscriber_id === props.currentUser.id
    );

    return (
      <>
        <div>
          {creators.map(creator => (
            <div key={creator.id} className='mb4'>
              <Link
                className='pointer link black f1 f1-m f-headline-l soehne-breit-leicht mv3'
                to={`/${creator.username}`}
              >
                {creator.username.charAt(0).toUpperCase() +
                  creator.username.slice(1)}
              </Link>
            </div>
          ))}
        </div>
        <div className='domaine-sans-fine-thin f2-l bt mt6'>
          <h1 className='w-70-l tc center mv5-l pt3-l'>Manage Your Profile</h1>
        </div>
        <EditProfile user={props.currentUser} />
        <DeleteProfile userId={props.currentUser.id} />
        <Logout />
        {props.currentUser.is_creator === true ? (
          <div>
            <div className='domaine-sans-fine-thin f2-l bt mt6'>
              <h1 className='w-70-l tc center mv5-l pt3-l'>Your Posts</h1>
            </div>
            {props.posts
              .filter(post => post.user.id === props.currentUser.id)
              .map(post => (
                <div key={post.id} className='mb4 bb b--black-20'>
                  <a class='db pv4 ph3 ph0-l no-underline black dim' href='#0'>
                    <div class='flex flex-column flex-row-ns'>
                      {post.image === '' ? null : (
                        <div class='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
                          <img src={post.image} class='db' alt='' />
                        </div>
                      )}
                      <div class='w-100 w-60-ns pl3-ns'>
                        <h2 className='soehne-breit-extraleicht mv1'>
                          {post.title}
                        </h2>
                        <h3 className='mt3 mb4'>
                          <em>
                            Post Type:{' '}
                            {post.post_type.charAt(0).toUpperCase() +
                              post.post_type.slice(1)}
                          </em>
                        </h3>
                        <button
                          onClick={() => history.push(`/posts/${post.id}/edit`)}
                          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
                        >
                          Edit Post
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
                        >
                          Delete Post
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            <button
              onClick={handleAddPost}
              style={{ margin: '50px 50px 100px 50px' }}
              className='tc w-80 center domaine-sans-fine-thin'
            >
              Create a New Post
            </button>
          </div>
        ) : null}

        {currentUserSubscriptions.length > 0 ? (
          <div className='domaine-sans-fine-thin f2-l bt mt6'>
            <h1 className='w-70-l center tc mv5-l pt3-l'>
              Your Subscriptions:
            </h1>
          </div>
        ) : null}
        {currentUserSubscriptions.map(subscription => (
          <div key={subscription.id} className='mv5'>
            <h1 className='link black f3 soehne-breit-extraleicht mv2'>
              {subscription.title.charAt(0).toUpperCase() +
                subscription.title.slice(1)}
            </h1>
            <button
              onClick={() => handleDeleteSubscription(subscription.id)}
              className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
            >
              Cancel Subscription
            </button>
          </div>
        ))}
      </>
    );
  }
}
