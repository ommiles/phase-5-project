export const fetchLogin = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_LOGIN_REQUEST" });
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
        if (!resp.ok) {
          // TODO: HOW TO HANDLE 401 UNAUTHORIZED REROUTE OR ALERT?
          // resp.status === 401
          throw resp;
        }
        return resp.json();
      })
      .then((data) => {
        if (data.message === "Incorrect Username or Password") {
          // localStorage.removeItem("token");
          localStorage.removeItem("token");
          dispatch({ type: "FETCH_LOGIN_FAILURE" });
        } else {
          localStorage.setItem("token", data.jwt);
          // localStorage.setItem("jwt", data.token);
          // localStorage.setItem("jwt", data.jwt);
          let user = data.user;
          console.log(user)
          dispatch({ type: "FETCH_LOGIN_SUCCESS", user });
        }
      });
  };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    // const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
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
        // .then(console.log)
        .then((data) => {
          if (data.message) {
            localStorage.removeItem("token");
          } else {
            let user = data.user;
            console.log(data)
            dispatch({ type: "FETCH_LOGIN_SUCCESS", user });
          }
        });
    }
  };
};
