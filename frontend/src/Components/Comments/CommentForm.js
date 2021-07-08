import React, { useState } from "react";
import GoBackButton from "../GoBackButton";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAddComment } from "../../Actions/commentsAction";

function CommentForm(props) {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.currentUser.id);
  const post_id = props.match.params.id;
  //   console.log(history);
  //   console.log(user_id);
  //   console.log(post_id);
  console.log(props);
  const [comment_content, setCommentContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchAddComment({
        user_id,
        post_id,
        comment_content,
      })
    );
    props.history.push(`/posts/${post_id}`);
  };

  const handleChange = (e) => {
    setCommentContent(e.target.value);
  };

  return (
    <div>
      <p>Not ready to share your comment?</p>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment_content">Comment:</label>
          <textarea
            type="text"
            name="comment_content"
            className="form-control"
            onChange={handleChange}
            value={comment_content}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit Comment"
        />
      </form>
    </div>
  );
}

export default withRouter(CommentForm);
