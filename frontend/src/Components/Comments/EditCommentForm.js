import React, { useState } from "react";
import GoBackButton from "../GoBackButton";
import { fetchEditComment } from "../../Actions/commentsAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function EditCommentForm(props) {
  console.log(props);
  const comment_id = props.comment_id;
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment_content, setCommentContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchEditComment({
        comment_id,
        comment_content,
      })
    );
    history.goBack()
  };

  const handleChange = (e) => {
    setCommentContent(e.target.value);
  };

  return (
    <div>
      <p>Not ready to change your comment?</p>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment_content">Comment:</label>
          <textarea
            type="text"
            name="comment_content"
            className="form-control"
            onChange={handleChange}
            // How to make value of current comment
            value={comment_content}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit Edited Comment"
        />
      </form>
    </div>
  );
}
