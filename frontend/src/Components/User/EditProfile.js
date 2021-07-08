import React from "react";
import { useHistory } from "react-router-dom";

export default function EditProfile(props) {
  const history = useHistory();
//   console.log(props.user);

  const handleClick = () => {
    // history.push(`/:username/edit`);
    history.push(`/${props.user.username}/edit`);
  };

  return (
    <div>
      <button onClick={handleClick}>Edit My Profile</button>
    </div>
  );
}
