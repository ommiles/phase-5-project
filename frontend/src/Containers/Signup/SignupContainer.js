import React from "react";
import SignupForm from "../../Components/Signup/SignupForm";

export default function SignupContainer(props) {
  return (
    <div>
      <h1>This is the Signup Container.</h1>
      {Object.keys(props.currentUser).length > 0 ? <h1>You already have an account, silly :)</h1> : <SignupForm />}
    </div>
  );
}
