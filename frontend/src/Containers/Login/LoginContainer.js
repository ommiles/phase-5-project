import React from "react";
import LoginForm from "../../Components/Login/LoginForm";

export default function LoginContainer(props) {
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
