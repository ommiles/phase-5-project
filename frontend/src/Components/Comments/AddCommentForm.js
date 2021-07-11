import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import GoBackButton from "../GoBackButton";
import { fetchAddComment } from "../../Actions/commentsAction";

export default function AddCommentForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_id = useSelector((state) => state.login.currentUser.id);
  const post_id = props.post_id;
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
    history.push(`/posts/${post_id}`);
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
