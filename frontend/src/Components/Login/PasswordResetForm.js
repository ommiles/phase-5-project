import React, { useState } from "react";
import { getPasswordFetch } from "../../Actions/loginAction";
import { useDispatch } from "react-redux";

export default function PasswordResetForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordFetch(email));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <input type="submit" value="Send Reset Email" />
      </form>
    </div>
  );
}
