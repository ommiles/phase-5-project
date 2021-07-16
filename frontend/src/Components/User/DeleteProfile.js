import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Actions/usersAction";

export default function DeleteProfile(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteUser(props.userId));
    // history.push("/");
  };

  return (
    <div className='mv3'>
    <Link
      to="/"
      className='link black f2 soehne-breit-extraleicht'
      onClick={handleClick}
      >Delete My Profile
      </Link>
    </div>
  );
}
