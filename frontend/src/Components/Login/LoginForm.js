import React, { useState } from "react";
import { fetchLogin } from "../../Actions/loginAction";
import { useSelector, useDispatch } from "react-redux";

export default function LoginForm(props) {
  // START_LOGIN_REQUEST
  // ERROR_MESSAGE
  // LOGIN_USER

  //   const username = useSelector((state) => state.username);
  //   const password = useSelector((state) => state.password);
  console.log(props);
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
    // dispatch(getProfileFetch());
    console.log({ username, password });
    props.history.push(`/${username}`)
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
