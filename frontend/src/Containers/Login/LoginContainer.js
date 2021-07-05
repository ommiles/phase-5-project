import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "../../Components/Login/LoginForm";

function LoginContainer(props) {
  return (
    <div>
      <h1>This will eventtually be the Homepage.</h1>
      <LoginForm error={props.error} history={props.history} />
    </div>
  );
}

export default withRouter(LoginContainer);
