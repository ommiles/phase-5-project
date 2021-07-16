import React from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
  return (
    <div key={props.post.id} className='mb4 bb b--black-20'>
      <Link
        className='db pv4 ph3 ph0-l no-underline black dim'
        to={`/posts/${props.post.id}`}
      >
        <div className='flex flex-column flex-row-ns'>
          {props.post.image === '' ? null : (
            <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns'>
              {props.allowed ? (
                <img src={props.post.image} alt='post' className='db' />
              ) : (
                <img
                  src={props.post.image}
                  alt='post'
                  style={{ filter: 'blur(10px)' }}
                  className='db'
                />
              )}
            </div>
          )}
          <div class='w-100 w-60-ns pl3-ns fg-text-light'>
            <h3 className='soehne-breit-extraleicht mv1 f5 f3-l'>
              {props.post.title}
            </h3>
            <p className='f4 mt3 mb4 domaine-sans-fine-thin'>
              Post Type:{' '}
              {props.post.post_type.charAt(0).toUpperCase() +
                props.post.post_type.slice(1)}
            </p>
            {props.listing === 'allow_list' ? (
              <p className='mv1'>Preview for Free</p>
            ) : (
              <p className='mv1'>Sign Up to View More!</p>
            )}
            <p className='mv1'>{`This listing type is: ${props.post.listing}`}</p>

            <p className='mv1'>
              For Level {props.post.membership_level} Subscribers
            </p>
            {props.post.type !== undefined ? (
              <p className='mv1'>{`This post's type is: ${props.post.type}`}</p>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}
