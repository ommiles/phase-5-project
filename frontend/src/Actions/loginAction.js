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
        .then((data) => {
          if (data.message) {
            localStorage.removeItem("token");
          } else {
            let user = data.user;
            console.log(data)
            console.log(user)
            dispatch({ type: "FETCH_LOGIN_SUCCESS", user });
          }
        });
    }
  };
};

export const getPasswordFetch = (email) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_PASSWORD_REQUEST" })
    return fetch("http://localhost:3000/api/v1/password/reset", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
        }),
    })
    .then((resp) => {
      return resp.json();
    })
    // .then(console.log)
    .then((data) => {
      if (data.message) {
        alert("Please try again.")
      } else {
        let user = data.user;
        let token = data.jwt;
        console.log(data)
        console.log(user)
        console.log(token)
        dispatch({ type: "FETCH_PASSWORD_SUCCESS", data });
      }
    });
  }
}

export const logout = () => {
  return(dispatch) => {
    // const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT_REQUEST" })
  }
}