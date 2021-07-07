import React from "react";

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <div className="form-group">
        <label htmlFor="is_creator">
          Are you signing up as a content creator?
        </label>
        <input
          className="form-control"
          id="is_creator"
          name="is_creator"
          type="is_creator"
          //   placeholder="Enter is_creator"
          value={props.is_creator}
          onChange={props.handleChange}
        />
      </div>
      <button className="">Sign up</button>
    </div>
  );
}
