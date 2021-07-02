import { combineReducers } from "redux";
// import commentReducer from "./Comment/commentReducer";
import loginReducer from "./Login/loginReducer";
// import logoutReducer from "./Logout/logoutReducer";
// import postReducer from "./Post/postReducer";
// import subscriptionReducer from "./Subscription/subscriptionReducer";
// import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  // comment: commentReducer,
  login: loginReducer,
  // logout: logoutReducer,
  // post: postReducer,
  // subscription: subscriptionReducer,
  // user: userReducer,
});

// shape of state:
// user: the logged in user and their profile details
// subscription: a logged in user's subscription
// post: if the logged in user is a creator, they will see their posts and be able to edit
// post: a creator user can create, update, or delete a post
// comment: if the user logged in is a creator, they will simply be able to see the comments on THEIR posts
// comment: if the user logged in is not a creator, they will see their comments on all posts for all creators that they subscribe to
// comment: a non-creator user can create, update, or delete a comment

export default rootReducer;
