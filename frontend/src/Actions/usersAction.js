export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    fetch("http://localhost:3000/api/v1/users")
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "FETCH_USERS_SUCCESS", posts }));
  };
};

export const fetchUserEdit = (user) => {
  console.log(user);
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          // password: user.password,
          // password_confirmation: user.password_confirmation,
        }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_REQUEST" });
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((posts) => {
        localStorage.removeItem("token");
        dispatch({ type: "DELETE_USER_SUCCESS" });
      });
  };
};
