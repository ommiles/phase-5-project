import React from 'react'
// import { withRouter } from 'react-router-dom'
import AddPostForm from '../../Components/Post/AddPostForm'
import EditPostForm from '../../Components/Post/EditPostForm'

export default function PostFormContainer(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello, this is the posts form container.</h1>
            <AddPostForm />
            <EditPostForm />
        </div>
    )
}
