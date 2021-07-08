import React from "react";
import GoBackButton from "../GoBackButton";

export default function EditCommentForm(props) {
    console.log(props)

    const handleSubmit = () => {
        console.log('Submit is firing.')
    }

    const handleChange = () => {
        console.log('Handle change is firing.')
    }
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
            // value={comment_content}
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
