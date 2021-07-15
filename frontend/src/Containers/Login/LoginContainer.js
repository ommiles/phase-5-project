import React from "react";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { toggleLoginState } from "../../Actions/toggleAction";
import LoginForm from "../../Components/Login/LoginForm";
import { useDispatch } from "react-redux";

function LoginContainer(props) {
  const dispatch = useDispatch()
  dispatch(toggleLoginState())
  const history = useHistory()
  const handlePasswordReset = () => {
    history.push("/password/reset")
  }

  return (
    <div>
      <h1>This will eventually be the Site Homepage.</h1>
      <LoginForm error={props.error} history={props.history} />
      {/* forgot button takes you to a Form */}
      {/* Give the form your email */}
      {/* Backend will find user by email */}
      {/* then delete that user's current password */}
      {/* PATCH the user/:id password column */}
      <button onClick={handlePasswordReset} >Forgot Your Password?</button>
    </div>
  );
}

export default withRouter(LoginContainer);
