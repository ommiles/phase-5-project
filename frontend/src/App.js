import React, { useEffect } from 'react';
import './CSS/App.css';
import './CSS/Fonts.css';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  // useLocation,
  withRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './Components/Navigation/NavBar';
import Menu from './Components/Navigation/Menu';
import PostsContainer from './Containers/Post/PostsContainer';
import ProfilePage from './Components/User/ProfilePage';
import PublicHomePage from './Components/User/PublicHomePage';
import LoginContainer from './Containers/Login/LoginContainer';
import SignupContainer from './Containers/Signup/SignupContainer';
import CheckoutContainer from './Containers/Checkout/CheckoutContainer';
import Homepage from './Components/User/Homepage';
import EditProfileForm from './Components/User/EditProfileForm';
import CommentFormContainer from './Containers/Comment/CommentFormContainer';
import PasswordResetForm from './Components/Login/PasswordResetForm';
import PasswordEditForm from './Components/Login/PasswordEditForm';
import PostFormContainer from './Containers/Post/PostFormContainer';
import { fetchPosts } from './Actions/postsAction';
import { fetchUsers } from './Actions/usersAction';
import { fetchComments } from './Actions/commentsAction';
import { fetchSubscriptions } from './Actions/subscriptionsAction';
import { getProfileFetch } from './Actions/loginAction';
import Sidebar from './Components/Sidebar';
import {
  toggleHomeState,
  toggleSignupState,
  toggleLoginState,
  toggleCartState,
} from './Actions/toggleAction';

function App(props) {
  useEffect(() => {
    console.log('mounted');
    console.log(users.length);
    dispatch(getProfileFetch());
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
    dispatch(fetchSubscriptions());
    console.log('unmounted');
  }, []);

  const toggleHome = useSelector(state => state.toggle.toggleHome);
  const toggleSignup = useSelector(state => state.toggle.toggleSignup);
  const toggleLogin = useSelector(state => state.toggle.toggleLogin);
  const toggleCart = useSelector(state => state.toggle.toggleCart);

  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const comments = useSelector(state => state.comments.comments);
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);

  const usersLoading = useSelector(state => state.users.loading);
  const postsLoading = useSelector(state => state.posts.loading);
  const commentsLoading = useSelector(state => state.comments.loading);
  const subscriptionsLoading = useSelector(
    state => state.subscriptions.loading
  );

  const currentUser = useSelector(state => state.login.currentUser);
  const login_error = useSelector(state => state.login.error);
  const menuOpen = useSelector(state => state.toggle.toggleMenu);
  const users = useSelector(state => state.users.users);

  const handleLogin = () => (
    <LoginContainer error={login_error} history={history} />
  );

  const handleUserProfile = () => (
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

  const handleSignup = () => <SignupContainer />;
  const handleProfileEdit = () => <EditProfileForm currentUser={currentUser} />;
  const handleHomepage = () => (
    <Homepage
      currentUser={currentUser}
      posts={posts}
      subscriptions={subscriptions}
    />
  );
  const handleCheckout = () => (
    <CheckoutContainer subscriptions={subscriptions} />
  );
  const handleAddComment = () => <CommentFormContainer />;
  const handleEditComment = () => <CommentFormContainer />;
  const handlePasswordReset = () => <PasswordResetForm />;
  const handlePasswordEdit = () => <PasswordEditForm users={users} />;
  const handleAddPost = () => <PostFormContainer />;
  const handleEditPost = () => <PostFormContainer />;

  if (menuOpen === false) {
    if (
      usersLoading === true ||
      postsLoading === true ||
      commentsLoading === true ||
      subscriptionsLoading === true
    ) {
      return <div>Hold tight while items are being fetched...</div>;
    } else {
      return (
        <>
          {/* NAVBAR */}
          <NavBar />
          {/* SIDEBAR */}
          <Sidebar />
          {/* START OF MAIN SECTION */}
          <main
            className='w-100 w-75-l fixed right-0 bottom-0 top-0  overflow-scroll'
            style={{ marginTop: '48px' }}
          >
            <div className='w-100 h-100 relative'>
              {/* RESPONSIVE SIDEBAR */}
              <div className='dn w-100 bb h4 fixed flex-m items-center justify-center'>
                <p className='f5 f4-m f3-l domaine-sans-fine-thin mh3 mh5-m mt0 mb0'>
                  CODINAIRE is a platform for digital creators to gain
                  subscribers and earn money. Create tutorials, paid
                  repositories, tutoring sessions, livestream coding sessions and polls.  Join for free!
                </p>
              </div>

              {/* RESPONSIVE HOME SECTION */}
              <div className='dn-m dn-l absolute top-0 bottom-0 mt6 pa4 w-100'>
                {/* TROUBLEMAKER */}
                {/* <Link className='link black pointer outline-transparent domaine-sans-fine-thin flex items-center'>
                  <span className='responsive-dot mr2'></span>
                  Home
                </Link> */}
                {/* RESPONSIVEAPP.JS COULD GO HERE */}
              </div>

              {/* HOME SECTION */}
              {/* <div className='absolute top-0 bottom-0 right-0 left-0 overflow-scroll-ns flex-m flex-l justify-end mt6-m mt6-s'> */}
              {/* <div className='absolute top-0 bottom-0 right-0 left-0 overflow-hidden dn flex-m flex-l justify-end mt6-m mt6-s'> */}
              <div className='absolute top-0 bottom-0 right-0 left-0 overflow-hidden flex flex-column flex-row-ns justify-end-ns pa4 pa0-ns mt6-m mt6-s'>
                <Link
                  // className='pointer sideways-text ma0 dn flex-m flex-l justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  // className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  className='pointer sideways-text ma0 flex justify-end-ns f3 f2-l link br-ns outline-transparent black pb4 pb5-ns domaine-sans-fine-thin ph2 items-center'
                  onClick={() => dispatch(toggleHomeState())}
                  to='/'
                >
                  <span
                    className={
                      toggleHome === true
                        ? 'dot dot-active dn db-ns'
                        : 'dot dn db-ns'
                    }
                  ></span>
                  Home
                </Link>
                <div className='overflow-scroll' style={{ minHeight: '900px' }}>
                  <div
                    className={
                      toggleHome === true
                        ? // ? 'mt7 ma0-ns w-100 overflow-scroll pa3 pv5-ns ph6-ns fg-mono-light f4-ns'
                        // 'ma0 w-100 overflow-scroll pv5-ns ph6 fg-mono-light f4 flex items-center justify-center'
                          // 'ma0 w-100 overflow-scroll pv5-ns ph7 ph6-m ph5-l fg-mono-light f4'
                          'ma0 w-100 overflow-scroll pv5-ns ph7 fg-mono-light f4'
                        : 'dn ma0 w-100'
                    }
                  >
                    <Route exact path='/'>
                      {Object.keys(currentUser).length > 0 ? (
                        <Redirect to='/home' />
                      ) : (
                        <PublicHomePage />
                      )}
                    </Route>

                    <Switch>
                      <Route exact path='/home' component={handleHomepage} />
                      <Route
                        exact
                        path={`/:username`}
                        component={handleUserProfile}
                      />
                      <Route
                        exact
                        path={`/:username/posts`}
                        component={handlePosts}
                      />
                      <Route
                        exact
                        path={`/:username/edit`}
                        component={handleProfileEdit}
                      />
                      <Route
                        exact
                        path={`/posts/:id`}
                        component={handlePosts}
                      />
                      <Route
                        exact
                        path={`/posts/:id/comment`}
                        component={handleAddComment}
                      />
                      <Route
                        exact
                        path={`/comments/:id/edit`}
                        component={handleEditComment}
                      />
                      <Route
                        exact
                        path={`/:username/add_post`}
                        component={handleAddPost}
                      />
                      <Route
                        exact
                        path={`/posts/:id/edit`}
                        component={handleEditPost}
                      />
                    </Switch>
                  </div>
                </div>

                {/* SIGNUP SECTION */}
                <Link
                  // className='pointer sideways-text ma0 dn flex-m flex-l justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  // className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  className='pointer sideways-text ma0 flex justify-end-ns f3 f2-l link br-ns outline-transparent black pb4 pb5-ns domaine-sans-fine-thin ph2 items-center'
                  onClick={() => dispatch(toggleSignupState())}
                  to='/signup'
                >
                  <span
                    className={
                      toggleSignup === true
                        ? 'dot dot-active dn db-ns'
                        : 'dot dn db-ns'
                    }
                  ></span>
                  Signup
                </Link>
                <div
                  className={
                    toggleSignup === true
                      ? // ? 'mt7 ma0-ns w-100 overflow-scroll pa3 pv5-ns ph6-ns fg-mono-light f4-ns'
                        'ma0 w-100 overflow-scroll pv5-ns ph6 fg-mono-light f4 flex items-center justify-center'
                      : 'dn ma0 w-100'
                  }
                >
                  <Route exact path='/signup' component={handleSignup} />
                </div>

                {/* LOGIN SECTION */}
                <Link
                  // className='pointer sideways-text ma0 dn flex-m flex-l justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  // className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  className='pointer sideways-text ma0 flex justify-end-ns f3 f2-l link br-ns outline-transparent black pb4 pb5-ns domaine-sans-fine-thin ph2 items-center'
                  to='/login'
                  onClick={() => dispatch(toggleLoginState())}
                >
                  <span
                    className={
                      toggleLogin === true
                        ? 'dot dot-active dn db-ns'
                        : 'dot dn db-ns'
                    }
                  ></span>
                  Login
                </Link>
                <div
                  className={
                    toggleLogin === true
                      ? // ? 'mt7 ma0-ns w-100 overflow-scroll pa3 pv5-ns ph6-ns fg-mono-light f4-ns'
                        'ma0 w-100 overflow-scroll pv5-ns ph6 fg-mono-light f4 flex items-center justify-center'
                      : 'dn ma0 w-100'
                  }
                  style={{
                    transition:
                      'all 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2s',
                  }}
                >
                  <Route exact path='/login' component={handleLogin} />
                  <Route
                    exact
                    path='/password/reset/'
                    component={handlePasswordReset}
                  />
                  <Route
                    exact
                    path='/reset/success'
                    component={handlePasswordReset}
                  />
                </div>
                <Route
                  exact
                  path={`/password/reset/:token`}
                  component={handlePasswordEdit}
                />
                {/* CART SECTION */}
                <Link
                  // className='pointer sideways-text ma0 dn flex-m flex-l justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  // className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                  className='pointer sideways-text ma0 flex justify-end-ns f3 f2-l link br-ns outline-transparent black pb4 pb5-ns domaine-sans-fine-thin ph2 items-center'
                  to='/checkout'
                  onClick={() => dispatch(toggleCartState())}
                >
                  <span
                    className={
                      toggleCart === true
                        ? 'dot dot-active dn db-ns'
                        : 'dot dn db-ns'
                    }
                  ></span>
                  Cart
                </Link>
                <div
                  className={
                    toggleCart === true
                      ? // ? 'mt7 ma0-ns w-100 overflow-scroll pa3 pv5-ns ph6-ns fg-mono-light f4-ns'
                        'ma0 w-100 overflow-scroll pv5-ns ph6 fg-mono-light f4 flex items-center justify-center'
                      : 'dn ma0 w-100'
                  }
                >
                  <Route exact path='/checkout' component={handleCheckout} />

                  <Route
                    exact
                    path={`/checkout/:id`}
                    component={handleCheckout}
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      );
    }
  } else {
    return (
      <>
        <NavBar />
        <Menu />
      </>
    );
  }
}

export default withRouter(App);
