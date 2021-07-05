export const fetchComments = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    fetch("http://localhost:3000/api/v1/comments")
      .then((resp) => resp.json())
      .then((comments) => dispatch({ type: "FETCH_COMMENTS_SUCCESS", comments }));
  };
};
