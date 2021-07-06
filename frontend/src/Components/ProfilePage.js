// import React from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import HomeButton from "./HomeButton";
import TestButton from "./TestButton";

function ProfilePage(props) {
  const url_username = props.match.params.username;
  const memberships = props.subscriptions.filter(
    (subscription) => subscription.subscribee.username === url_username
  );
  console.log(memberships);
  console.log(props);

  return (
    <div>
      <HomeButton />
      <TestButton />
      <h1>Hi! This is the Profile Page Component.</h1>
      {props.users
        .filter((user) => user.username === url_username)
        .map((user, index) =>
          user.is_creator ? (
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
          ) : (
            <div key={index}>
              This is falsey AKA {user.username} is not a creator.
              <h4>My id is: {user.id}</h4>
              <h5>My bio is: {user.bio}</h5>
              <h6>Username: {user.username}</h6>
            </div>
          )
        )}
    </div>
  );
}

export default withRouter(ProfilePage);
