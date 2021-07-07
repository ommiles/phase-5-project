import React from 'react'

export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
      }
      return (
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            className="form-control"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Enter first_name"
            value={props.first_name}
            onChange={props.handleChange}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            className="form-control"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Enter last_name"
            value={props.last_name}
            onChange={props.handleChange}
          />
        </div>
      );
}
