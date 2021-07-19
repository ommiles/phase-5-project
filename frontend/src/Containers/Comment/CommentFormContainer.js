import React from 'react';
import { withRouter } from 'react-router-dom';
import AddCommentForm from '../../Components/Comments/AddCommentForm';
import EditCommentForm from '../../Components/Comments/EditCommentForm';

function CommentFormContainer(props) {
  if (props.match.path === '/posts/:id/comment') {
    return <AddCommentForm post_id={props.match.params.id} />;
  }
  if (props.match.path === '/comments/:id/edit') {
    return <EditCommentForm comment_id={props.match.params.id} />;
  }
}

export default withRouter(CommentFormContainer);
