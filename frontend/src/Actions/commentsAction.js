export const fetchComments = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    fetch("http://localhost:3000/api/v1/comments")
      .then((resp) => resp.json())
      .then((comments) =>
        dispatch({ type: "FETCH_COMMENTS_SUCCESS", comments })
      );
  };
};

export const fetchAddComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comment_content: comment.comment_content,
        user_id: comment.user_id,
        post_id: comment.post_id,
      }),
    })
      .then((resp) => resp.json())
      .then((comment) => dispatch({ type: "FETCH_COMMENT_SUCCESS", comment }));
  };
};

export const deleteComment = (comment_id) => {
  return (dispatch) => {
    dispatch({ type: "START_COMMENTS_REQUEST" });
    fetch(`http://localhost:3000/api/v1/comments/${comment_id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "DELETE_COMMENT_SUCCESS", comment_id });
      });
  };
};
