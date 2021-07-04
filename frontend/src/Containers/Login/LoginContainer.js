import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "../../Components/Login/LoginForm";

function LoginContainer(props) {
  return (
    <div>
      <LoginForm
        error={props.error}
        history={props.history}
        // fetchLogin={props.fetchLogin}
      />
    </div>
  );
}

export default withRouter(LoginContainer)