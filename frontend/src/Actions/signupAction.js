export const fetchSignup = (info) => {
    return (dispatch) => {
    dispatch({ type: "FETCH_SIGNUP_REQUEST" });
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: info.username,
          first_name: info.first_name,
          last_name: info.last_name,
          email: info.email,
          password: info.password,
          password_confirmation: info.password_confirmation,
          bio: info.bio,
          avatar: info.avatar,
          latitude: info.latitude,
          longitude: info.longitude,
          bio_video: info.bio_video,
          bio_image: info.bio_image,
          banner: info.banner,
          page_name: info.page_name,
          is_creator: info.is_creator,
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
          dispatch({ type: "FETCH_SIGNUP_FAILURE" });
        } else {
          // localStorage.setItem("token", data.token);
          // localStorage.setItem("jwt", data.token);
        //   localStorage.setItem("jwt", data.jwt);
          let user = data.user;
          dispatch({ type: "FETCH_SIGNUP_SUCCESS", user });
          dispatch({ type: "FETCH_LOGIN_SUCCESS", user });
          localStorage.setItem("token", data.jwt);
        }
      });
  };
};
