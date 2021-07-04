export const fetchLogin = ({username, password}) => {
  console.log("hello there");
  return (dispatch) => {
    dispatch({ type: "START_LOGIN_REQUEST" });
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Incorrect Username or Password") {
          localStorage.removeItem("token");
          console.log(data);
          dispatch({ type: "ERROR_MESSAGE" });
        } else {
          localStorage.setItem("token", data.token);
          let user = data.user;
          console.log(data);
          dispatch({ type: "LOGIN_USER", user });
        }
      });
  };
};

// export const getProfileFetch = () => {
//   return (dispatch) => {
//     const token = localStorage.token;
//     if (token) {
//       return fetch("http://localhost:3000/api/v1/:username", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((resp) => {
//           return resp.json();
//         })
//         .then((data) => {
//           if (data.message) {
//             localStorage.removeItem("token");
//           } else {
//             let user = data.user;
//             dispatch({ type: "LOGIN_USER", user });
//           }
//         });
//     }
//   };
// };
