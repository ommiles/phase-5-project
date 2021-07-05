import React from 'react'

export default function Post(props) {
    return (
        <div>
            <h2>{props.post.title}</h2>
            <h2>Author: {props.post.user.first_name} {props.post.user.last_name}</h2>
            <h4><em>{props.post.header}</em></h4>
            <h4>{props.post.subheader}</h4>
            <img src={props.post.image} alt="post" />
            <p>{props.post.description}</p>
            <p>{`This listing type is: ${props.post.listing}`}</p>
            <p>{`This post's membership level is: ${props.post.membership_level}`}</p>
            <p>{`This post's type is: ${props.post.type}`}</p>
        </div>
    )
}