import React, { useState } from "react";
import GoBackButton from "../GoBackButton";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserEdit } from "../../Actions/usersAction";

export default function EditProfileForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const id = props.currentUser.id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
    dispatch(
      fetchUserEdit({
        //   TODO: HOW TO HANDLE  EMPTY FIELDS ""
        //   username === "" ? setUsername(props.currentUser.username) : null;
        id,
        username,
        email,
        first_name,
        last_name,
      })
    );
    alert("Your account has been updated.");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "first_name":
        setFirstName(e.target.value);
        break;
      case "last_name":
        setLastName(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            onChange={handleChange}
            value={first_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            onChange={handleChange}
            value={last_name}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit Changes"
        />
      </form>
    </div>
  );
}
