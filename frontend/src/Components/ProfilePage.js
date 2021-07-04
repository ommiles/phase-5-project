import React from "react";
import { withRouter } from "react-router-dom";
import HomeButton from "./HomeButton";
import TestButton from "./TestButton";

function ProfilePage(props) {
  console.log(props);
  return (
    <div>
      <HomeButton />
      <TestButton />
      <h1>Hi! This is the Profile Page Component.</h1>
      <h2>Welcome to {props.user.username}'s profile 👋</h2>
      {props.user.is_creator ? (
        <h3>I am a creator. </h3>
      ) : (
        <h3>I am not a creator.</h3>
      )}
      <h3>My id is: {props.user.id}</h3>
      <h6>My bio is: {props.user.bio}</h6>
      <h6>{props.user.username}</h6>
      <h6>{props.user.username}</h6>
      <h6>{props.user.username}</h6>
      <img src={props.user.bio_image} alt="profile"></img>
      <img src={props.user.avatar} alt="profile"></img>
      <img src={props.user.banner} alt="profile"></img>
    </div>
  );
}

export default withRouter(ProfilePage);
