import React from "react";
import { withRouter } from "react-router-dom";
import AddPostForm from "../../Components/Post/AddPostForm";
import EditPostForm from "../../Components/Post/EditPostForm";

function PostFormContainer(props) {
  console.log(props);
  if (props.match.path === "/:username/add_post") {
    return <AddPostForm />;
  }
  if (props.match.path === "/posts/:id/edit") {
      console.log(props.match.params)
    return <EditPostForm post_id={props.match.params.id} />;
  }
}

export default withRouter(PostFormContainer);
