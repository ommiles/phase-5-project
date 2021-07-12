import React from "react";
import DeleteProfile from "../User/DeleteProfile";
import EditProfile from "./EditProfile";
import { logout } from "../../Actions/loginAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost } from "../../Actions/postsAction";

export default function Homepage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(props);

  const handleAddPost = () => {
    const username = props.currentUser.username;
    history.push(`/${username}/add_post`);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleDelete = (post_id) => {
    dispatch(deletePost(post_id));
  };

  if (Object.keys(props.currentUser).length === 0) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    return (
      <div>
        <h1>This is a User's private Homepage.</h1>
        <EditProfile user={props.currentUser} />
        <DeleteProfile userId={props.currentUser.id} />
        <button onClick={handleLogout}>Logout</button>
        {props.currentUser.is_creator === true ? (
          <div>
            <h1>Your Posts:</h1>
            {props.posts
              .filter((post) => post.user.id === props.currentUser.id)
              .map((post) => (
                <div key={post.id}>
                  <h1>{post.title}</h1>
                  <h3>
                    <em>{post.post_type}</em>
                  </h3>
                  <button
                    onClick={() => history.push(`/posts/${post.id}/edit`)}
                  >
                    Edit Post
                  </button>
                  <button onClick={() => handleDelete(post.id)}>
                    Delete Post
                  </button>
                </div>
              ))}
            <button onClick={handleAddPost} style={{margin:"50px"}} >Create a New Post</button>
          </div>
        ) : null}
      </div>
    );
  }
}
