import React from "react";

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
        />
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
      <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Create a New Password"
          value={props.password}
          onChange={props.handleChange}
        />
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          className="form-control"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
          value={props.password_confirmation}
          onChange={props.handleChange}
        />
    </div>
  );
}
