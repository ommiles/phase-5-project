import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Actions/usersAction";

export default function DeleteProfile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

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
