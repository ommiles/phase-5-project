import React from 'react';
import CommentsList from '../Comments/CommentsList';

export default function Post(props) {
  const postWords = props.post.title.split(' ')
  const shortenedPostTitle = postWords[0]+' '+postWords[1]+' '+postWords[2]+' '+postWords[3]+' '+postWords[4]+'...'
  return (
    <div className='mb4' >
      {/* <h1>This is the Post Component.</h1> */}
      <h1 className='f1 f1-m f-headline-l soehne-breit-leicht mv3'>{shortenedPostTitle}</h1>
      {/* <h2>
        Author: {props.post.user.first_name} {props.post.user.last_name}
      </h2> */}
      <h4 className='f3 lh-title domaine-sans-fine-thin' >{props.post.subheader}</h4>

      {props.allowed ? (
        <div>
          <img src={props.post.image} alt='post' />
          <p className='geo-thin f3'>{props.post.post_content}</p>
        </div>
      ) : (
        <div>
          <img src={props.post.image} alt='post' style={{ filter: "blur(10px)" }}/>
          <p style={{ filter: "blur(3px)" }}>{props.post.post_content}</p>
        </div>
      )}
      {/* <p>{props.post.post_content}</p> */}
      {/* <p>{`This listing type is: ${props.post.listing}`}</p>
      <p>For Level {props.post.membership_level} Subscribers</p>
      <p>{`This post's type is: ${props.post.type}`}</p> */}
      <CommentsList comments={props.comments} id={props.id} />
    </div>
  );
}
