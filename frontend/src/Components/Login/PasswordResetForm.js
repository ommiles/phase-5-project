import React, { useState } from "react";
import { getPasswordFetch } from "../../Actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
// import emailjs from "emailjs-com";

export default function PasswordResetForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const currentUser = useSelector((state) => state.login.currentUser);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordFetch(email));
    // sendEmail(e);
    // e.target.reset()
  };

  // const sendEmail = (e) => {
  //   emailjs
  //     .sendForm("service_wollzph", "template_89vbj9f", e.target, "user_CZ8AxCf2hgq23IKcpjfYS")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

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

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="text"
  //           name="email"
  //           onChange={handleChange}
  //           value={email}
  //         />
  //       </div>
  //       <input type="submit" value="Send Reset Email" />
  //     </form>
  //   </div>
  // );
}
