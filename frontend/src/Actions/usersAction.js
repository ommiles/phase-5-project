export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    fetch("http://localhost:3000/api/v1/users")
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "FETCH_USERS_SUCCESS", posts }));
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
