import React from 'react';
import { withRouter } from 'react-router-dom';
import AddPostForm from '../../Components/Post/AddPostForm';
import EditPostForm from '../../Components/Post/EditPostForm';

function PostFormContainer(props) {
  if (props.match.path === '/:username/add_post') {
    return <AddPostForm />;
  }
  if (props.match.path === '/posts/:id/edit') {
    return <EditPostForm post_id={props.match.params.id} />;
  }
}

export default withRouter(PostFormContainer);
