import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import TestPage from "./Components/TestPage";
import ProfilePage from "./Components/ProfilePage";
import LoginContainer from "./Containers/Login/LoginContainer";

function App(props) {
  console.log(props);

  let history = useHistory();

  useEffect(() => {});

  const user = useSelector((state) => state.login.currentUser);
  const login_error = useSelector((state) => state.login.error);

  const handleLogin = () => (
    <LoginContainer
      error={login_error}
      history={history}
      // fetchLogin={fetchLogin}
    />
  );

  const handleUser = () => <ProfilePage history={history} user={user} />;

  return (
    <div>
      <Route path="/" exact component={handleLogin} />
      <Switch>
        <Route exact path="/testpage" component={TestPage} />
        <Route path={`/:username`} component={handleUser} />
      </Switch>
      {/* <Redirect from="/accounts" to="/" /> */}
    </div>
  );
}

export default withRouter(App);
