import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function EditProfile(props) {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/${props.user.username}/edit`);
  // };

  return (
    <div className='mv3'>
      {/* <button onClick={handleClick}>Edit My Profile</button> */}
      <Link
      to={`/${props.user.username}/edit`}
      className='link black f2 soehne-breit-extraleicht'
      >Edit My Profile
      </Link>
    </div>
  );
}
