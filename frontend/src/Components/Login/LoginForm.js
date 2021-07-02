import React, { useState } from "react";
import { fetchLogin } from "../../Actions/loginAction";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export default function LoginForm(props) {
  // START_LOGIN_REQUEST
  // UPDATE_USERNAME
  // UPDATE_PASSWORD
  // ERROR_MESSAGE
  // LOGIN_USER

//   const username = useSelector((state) => state.username);
//   const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
        setUsername(e.target.value)
    //   dispatch({ type: "UPDATE_USERNAME", payload: e.target.value });
    }
    if (e.target.name === "password") {
        setPassword(e.target.value)
    //   dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ username, password }))
    console.log({ username, password })
    // setUsername("");
    // setPassword("");
    // dispatch({ type: "START_LOGIN_REQUEST" });
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
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      {/* {this.props.error ? <p>Invalid username or password</p> : null} */}
    </div>
  );
}
