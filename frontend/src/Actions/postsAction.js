export const fetchPosts = () => {
  console.log("fetchPosts is firing.");
  return (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    fetch("http://localhost:3000/api/v1/posts")
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "FETCH_POSTS_SUCCESS", posts }));
  };
};
