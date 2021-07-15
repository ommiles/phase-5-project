import React from "react";
import { toggleSignupState } from "../../Actions/toggleAction";
import SignupForm from "../../Components/Signup/SignupForm";
import { useDispatch } from "react-redux";

export default function SignupContainer(props) {
  const dispatch = useDispatch()
  dispatch(toggleSignupState())
  return (
    <div>
      <h1>This is the Signup Container.</h1>
      {/* if there is a current user logged in, no form is rendered */}
      {Object.keys(props.currentUser).length > 0 ? <h1>You already have an account, silly :)</h1> : <SignupForm />}
    </div>
  );
}
