import React from 'react'

export default function Comment(props) {
    console.log(props);
    return (
        <div style={{border: '5px solid black', margin: '5px'}}>
            <p>{props.comment.comment_content}</p>
        </div>
    )
}
