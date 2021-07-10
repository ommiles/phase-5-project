import React, { useState } from "react";
import { fetchPasswordEdit } from "../../Actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";

function PasswordEditForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const id = useSelector((state) => state.login.currentUser.id);
  const token = props.match.params.token;

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
}

export default withRouter(PasswordEditForm);
