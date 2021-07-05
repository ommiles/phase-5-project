export const fetchLogin = ({ username, password }) => {
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
          // localStorage.removeItem("token");
          localStorage.removeItem("jwt");
          console.log(data);
          dispatch({ type: "ERROR_MESSAGE" });
        } else {
          // localStorage.setItem("token", data.token);
          // localStorage.setItem("jwt", data.token);
          localStorage.setItem('jwt', data.jwt)
          let user = data.user;
          console.log(data);
          dispatch({ type: "LOGIN_USER", user });
        }
      });
  };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      return fetch("http://localhost:3000/api/v1/set_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          if (data.message) {
            localStorage.removeItem("jwt");
          } else {
            // console.log(data)
            let user = data;
            dispatch({ type: "LOGIN_USER", user });
          }
        });
    }
  };
};
