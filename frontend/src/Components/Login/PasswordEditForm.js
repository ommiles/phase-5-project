import React, { useState } from "react";
import { fetchPasswordEdit } from "../../Actions/usersAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
// need to decode token to find user_id
// library found here: https://github.com/auth0/jwt-decode
import jwt_decode from "jwt-decode";
import { toggleLoginState } from "../../Actions/toggleAction";

function PasswordEditForm(props) {
  const dispatch = useDispatch();
  dispatch(toggleLoginState())
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const token = props.match.params.token;
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const handleChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "password_confirmation") {
      setPasswordConfirmation(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchPasswordEdit({
        id,
        token,
        password,
        password_confirmation,
      })
    );
    history.push("/");
  };

  if (props.users.some((user) => user.id === id)) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div>
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
              type="text"
              name="password_confirmation"
              onChange={handleChange}
              value={password_confirmation}
            />
          </div>
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    );
  } else {
    alert('User does not exist.  Please close window.')
  }
}

export default withRouter(PasswordEditForm);
