import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Actions/usersAction";

export default function DeleteProfile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  //   TODO: TOKEN IS CLEARED INCONSISTENTLY, ITEM IS DELETED FROM DB CONSISTENTLY, SOME ERROR MESSAGES (below)
  //   Uncaught (in promise) SyntaxError: Unexpected end of JSON input at usersAction.js:42
  console.log(props.userId);

  const handleClick = () => {
    dispatch(deleteUser(props.userId));
    history.push("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Delete My Profile</button>
    </div>
  );
}
