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
  console.log(subscriptions);
  const login_error = useSelector((state) => state.login.error);

  const handleLogin = () => (
    <LoginContainer error={login_error} history={history} />
  );

  const handleUser = () => (
    <ProfilePage users={users} subscriptions={subscriptions} />
  );
  const handlePosts = () => (
    <PostsContainer
      posts={posts}
      comments={comments}
      subscriptions={subscriptions}
    />
  );

  return (
    <div>
      <Route path="/" exact component={handleLogin} />
      <Switch>
        <Route exact path="/testpage" component={TestPage} />
        <Route path={`/:username`} exact component={handleUser} />
        <Route path={`/:username/posts`} exact component={handlePosts} />
        <Route path={`/posts/:id`} exact component={handlePosts} />
      </Switch>
      {/* <Redirect from="/accounts" to="/" /> */}
    </div>
  );
}

export default withRouter(App);
