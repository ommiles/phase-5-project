import React from "react";
import DeleteProfile from "../User/DeleteProfile";
import EditProfile from "./EditProfile";

export default function Homepage(props) {
  if (Object.keys(props.currentUser).length === 0) {
    return <div>Hold tight while items are being fetched...</div>;
  } else {
    return (
      <div>
        <h1>This is a User's private Homepage.</h1>
        <EditProfile user={props.currentUser} />
        <DeleteProfile userId={props.currentUser.id} />
      </div>
    );
  }
}
