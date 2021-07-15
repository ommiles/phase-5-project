import React, { useState } from "react";
import { getPasswordFetch } from "../../Actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { toggleHomeState } from "../../Actions/toggleAction";
import { useHistory } from "react-router-dom";

export default function PasswordResetForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const currentUser = useSelector(state => state.login.currentUser)

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleHomeState())
    Object.keys(currentUser).length > 0 ? history.push("/home") : history.push("/")
    dispatch(getPasswordFetch(email));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <input type="submit" value="Send Reset Email" />
      </form>
    </div>
  );
}
