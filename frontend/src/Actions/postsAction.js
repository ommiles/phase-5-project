export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    fetch("http://localhost:3000/api/v1/posts")
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "FETCH_POSTS_SUCCESS", posts }));
  };
};

export const fetchAddPost = (post) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.title,
        post_type: post.post_type,
        image: post.image,
        post_content: post.post_content,
        subheader: post.subheader,
        mambership_level: post.mambership_level,
        listing: post.listing,
        user_id: post.user_id,
      }),
    })
      .then((resp) => resp.json())
      .then((comment) => dispatch({ type: "FETCH_POST_SUCCESS", comment }));
  };
};

export const fetchEditPost = (post) => {
  return (dispatch) => {
    console.log(post);
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/v1/posts/${post.post_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.title,
        post_type: post.post_type,
        image: post.image,
        post_content: post.post_content,
        subheader: post.subheader,
        mambership_level: post.mambership_level,
        listing: post.listing,
      }),
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then((post) => dispatch({ type: "EDIT_POST_SUCCESS", post }));
  };
};

export const deletePost = (post_id) => {
  return (dispatch) => {
    console.log(post_id)
    dispatch({ type: "START_POSTS_REQUEST" });
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/v1/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then((data) => {
        console.log(data);
        dispatch({ type: "DELETE_POST_SUCCESS", post_id });
      });
  };
};
