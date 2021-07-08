import React, { useEffect } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  useHistory,
  // useLocation,
  withRouter,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TestPage from "./Components/TestPage";
import PostsContainer from "./Containers/Post/PostsContainer";
import ProfilePage from "./Components/ProfilePage";
import LoginContainer from "./Containers/Login/LoginContainer";
import SignupContainer from "./Containers/Signup/SignupContainer";
import CheckoutContainer from "./Containers/Checkout/CheckoutContainer";
import Homepage from "./Components/User/Homepage";
import EditProfileForm from "./Components/User/EditProfileForm";
import CommentForm from "./Components/Comments/CommentForm";
import { fetchPosts } from "./Actions/postsAction";
import { fetchUsers } from "./Actions/usersAction";
import { fetchComments } from "./Actions/commentsAction";
import { fetchSubscriptions } from "./Actions/subscriptionsAction";
import { getProfileFetch } from "./Actions/loginAction";

function App() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileFetch());
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
    dispatch(fetchSubscriptions());
    // fetch("http://localhost:3000/api/v1/posts")
    //   .then((resp) => resp.json())
    //   .then(console.log)
  }, []);

  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  const subscriptions = useSelector(
    (state) => state.subscriptions.subscriptions
  );
  const currentUser = useSelector((state) => state.login.currentUser);
  console.log(currentUser)
  // console.log(users);
  // console.log(posts);
  // console.log(comments);
  // console.log(subscriptions);
  const login_error = useSelector((state) => state.login.error);

  const handleLogin = () => (
    <LoginContainer error={login_error} history={history} />
  );

  const handleUser = () => (
    <ProfilePage
      users={users}
      subscriptions={subscriptions}
      currentUser={currentUser}
    />
  );

  const handlePosts = () => (
    <PostsContainer
      posts={posts}
      comments={comments}
      subscriptions={subscriptions}
    />
  );

  const handleSignup = () => <SignupContainer currentUser={currentUser} />;
  const handleProfileEdit = () => <EditProfileForm currentUser={currentUser} />;
  const handleHomepage = () => <Homepage currentUser={currentUser} />;
  // checkout needs a currentUser in state
  // pass is the cost,
  const handleCheckout = () => <CheckoutContainer />;
  const handleAddComment = () => <CommentForm id={history} />;
  return (
    <div>
      <Route path="/" exact component={handleLogin} />
      <Switch>
        <Route exact path="/testpage" component={TestPage} />
        <Route exact path="/signup" component={handleSignup} />
        <Route exact path="/checkout" component={handleCheckout} />
        <Route exact path={`/home`} component={handleHomepage} />
        <Route exact path={`/:username`} component={handleUser} />
        <Route exact path={`/:username/posts`} component={handlePosts} />
        <Route exact path={`/:username/edit`} component={handleProfileEdit} />
        <Route exact path={`/posts/:id`} component={handlePosts} />
        <Route exact path={`/posts/:id/comment`} component={handleAddComment} />
      </Switch>
      {/* <Redirect from="/accounts" to="/" /> */}
    </div>
  );
}

export default withRouter(App);
