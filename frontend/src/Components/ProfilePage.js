// import React from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import HomeButton from "./HomeButton";
import TestButton from "./TestButton";
import { useSelector } from "react-redux";

function ProfilePage(props) {
  const url_username = props.match.params.username;
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <HomeButton />
      <TestButton />
      <h1>Hi! This is the Profile Page Component.</h1>
      {users
        .filter((user) => user.username === url_username)
        .map((user, index) => (
          <div key={index}>
            <h2>Welcome to {user.username}'s profile 👋</h2>
            {user.is_creator ? (
              <h3>I am a creator. </h3>
            ) : (
              <h3>I am not a creator.</h3>
            )}
            <h4>My id is: {user.id}</h4>
            <h5>My bio is: {user.bio}</h5>
            <h6>Username: {user.username}</h6>
            <img src={user.avatar} alt="profile"></img>
            <img src={user.banner} alt="profile"></img>
          </div>
        ))}
    </div>
  );
}

export default withRouter(ProfilePage);
