import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { fetchLogin } from "./Actions/loginAction";
import { getProfileFetch } from "./Actions/loginAction";
// import Navigation from './Components/Navigation';
import LoginForm from "./Components/Login/LoginForm";
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

  // const login = useSelector((state) => state.currentUser);
  const login_error = useSelector((state) => state.error);

  const handleLogin = () => (
    <LoginContainer
      error={login_error}
      history={props.history}
      // fetchLogin={fetchLogin}
    />
  );

  // const handleUser = () => <ProfileContainer history={props.history} />;

  return (
    <div>
      <Switch>
        <Route path="/" exact component={handleLogin} />
        {/* <Route path={`/:username`} exact component={handleUser} /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
