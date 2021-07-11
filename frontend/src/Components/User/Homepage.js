import React from "react";
import DeleteProfile from "../User/DeleteProfile";
import EditProfile from "./EditProfile";
import { logout } from "../../Actions/loginAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Homepage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props)

  const handleAddPost = () => {
    const username = props.currentUser.username
    history.push(`/${username}/add_post`);
  }

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
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
        {props.currentUser.is_creator === true ? <button onClick={handleAddPost}>Add Post</button> : null}
      </div>
    );
  }
}
