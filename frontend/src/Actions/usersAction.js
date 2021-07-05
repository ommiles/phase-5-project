export const fetchUsers = () => {
    console.log("fetchUsers is firing.");
    return (dispatch) => {
      dispatch({ type: "FETCH_USERS_REQUEST" });
      fetch("http://localhost:3000/api/v1/users")
        .then((resp) => resp.json())
        .then((posts) => dispatch({ type: "FETCH_USERS_SUCCESS", posts }));
    };
  };