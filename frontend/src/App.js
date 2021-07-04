// import React, { useEffect } from "react";
import React, { useEffect, useContext, createContext, useState } from "react";
// import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  withRouter,
} from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { fetchLogin } from "./Actions/loginAction";
// import Navigation from './Components/Navigation';
import LoginForm from "./Components/Login/LoginForm";
import Homepage from "./Components/Homepage";
import TestPage from "./Components/TestPage";
import ProfilePage from "./Components/ProfilePage";
import LoginContainer from "./Containers/Login/LoginContainer";

function App(props) {
  console.log(props);

  useEffect(() => {
    // getProfileFetch()
    // if (props.location.pathname === '/' && localStorage.token !== undefined) {
    //   props.history.push('/home')
    // }
    // fetch('http://localhost:3000/api/v1/users/1')
    // .then(resp => resp.json())
    // .then(resp => console.log(resp))
  });

  // useSelector((state) => state.login.currentUser ? <ProfilePage /> : <Homepage />)
  const user = useSelector((state) => state.login.currentUser);
  const login_error = useSelector((state) => state.login.error);

  const handleLogin = () => (
    <LoginContainer
      error={login_error}
      history={props.history}
      // fetchLogin={fetchLogin}
    />
  );

  // const handleTestPage = () => {
  //   <TestPage />
  // }

  const handleUser = () => <ProfilePage history={props.history} user={user} />;

  return (
    <Switch>
      <div>
        <AuthButton />
        <Route path="/" exact component={handleLogin} />
        <Route path={`/:username`} component={handleUser} />
        <Route path="/testpage">
          <TestPage/>
          <Route/>
        <Redirect from="/accounts" to="/" />
        {/* <Redirect from="/testpage" to="/testpage" /> */}
      </div>
    </Switch>
  );
}

export default withRouter(App);
