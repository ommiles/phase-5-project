import React, { useState } from "react";
import { fetchLogin } from "../../Actions/loginAction";
import { useDispatch } from "react-redux";
import { toggleHomeState } from "../../Actions/toggleAction";

export default function LoginForm(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ username, password }));
    props.history.push("/home");
    dispatch(toggleHomeState())
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
