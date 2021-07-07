const initialState = {
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  bio: "",
  avatar: "",
  latitude: "",
  longitude: "",
  bio_video: "",
  bio_image: "",
  banner: "",
  page_name: "",
  is_creator: "",
};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SIGNUP_SUCCESS":
      return {
        ...state,
        error: false,
        loading: false,
      };
    case "FETCH_SIGNUP_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
