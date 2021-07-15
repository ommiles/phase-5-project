import React, { useEffect, useState } from 'react';
import './CSS/App.css';
import './CSS/Fonts.css';
import emailjs from 'emailjs-com';
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
import { toggleHomeState, toggleSignupState, toggleLoginState, toggleCartState } from './Actions/toggleAction';

function App(props) {

  const toggleHome = useSelector(state => state.toggle.toggleHome)
  const toggleSignup = useSelector(state => state.toggle.toggleSignup)
  const toggleLogin = useSelector(state => state.toggle.toggleLogin)
  const toggleCart = useSelector(state => state.toggle.toggleCart)

  const creators = useSelector(state =>
    state.users.users.filter(user => user.is_creator === true)
  );

  let history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const posts = useSelector(state => state.posts.posts);
  const comments = useSelector(state => state.comments.comments);
  const subscriptions = useSelector(state => state.subscriptions.subscriptions);
  const currentUser = useSelector(state => state.login.currentUser);
  const login_error = useSelector(state => state.login.error);
  const token = useSelector(state => state.login.token);

  // TOGGLE MENU OPEN & CLOSED
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    dispatch(getProfileFetch());
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  useEffect(() => {
    if (token !== '' && props.location.pathname === '/password/reset') {
      emailjs.init('user_CZ8AxCf2hgq23IKcpjfYS');

      const templateParams = {
        name: currentUser.first_name,
        reply_to: currentUser.email,
        message: `http://localhost:3001/password/reset/${token}`,
      };

      emailjs.send('service_wollzph', 'template_89vbj9f', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    }
  });

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

  const handleSignup = () => <SignupContainer currentUser={currentUser} />;
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
    return (
      <>
        {/* NAVBAR */}
        <NavBar handleMenuClick={handleMenuClick} />
        {/* SIDEBAR */}
        <Sidebar />
        {/* START OF MAIN SECTION */}
        <main
          className='w-100 w-75-l fixed right-0 bottom-0 top-0  overflow-scroll'
          style={{ marginTop: '48px' }}
        >
          {/* RESPONSIVE SIDEBAR */}
          <div className='w-100 h-100 relative'>
            <div className='dn-l w-100 bb h4'>
              <p className='f5 f4-m f3-l domaine-sans-fine-thin mt4 mr5 ml5 mb3'>
                Off Season is a design and photo studio with a focus in music.
                Founded in New York City in 2018, Off Season takes a holistic
                and strategic approach in defining and developing an artist’s
                creative direction through design, photography and typography.
              </p>
            </div>

            {/* HOME SECTION */}
            <div className='absolute top-0 bottom-0 right-0 left-0 overflow-hidden dn flex-m flex-l justify-end mt6-m mt6-s'>
              <Link
                className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                // name='home'
                // onClick={handleClick}
                onClick={() => dispatch(toggleHomeState())}
                to='/'
              >
                <span
                  className={toggleHome === true ? 'dot dot-active' : 'dot'}
                ></span>
                Home
              </Link>

              <div
                className={
                  toggleHome === true
                    ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
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
                    path={`/checkout/:id`}
                    component={handleCheckout}
                  />
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
                  <Route exact path={`/posts/:id`} component={handlePosts} />
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
                    path={`/password/reset/:token`}
                    component={handlePasswordEdit}
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

              {/* SIGNUP SECTION */}
              <Link
                className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                // name='signup'
                // onClick={handleClick}
                onClick={() => dispatch(toggleSignupState())}
                  to="/signup"
              >
                <span
                  className={toggleSignup === true ? 'dot dot-active' : 'dot'}
                ></span>
                Signup
              </Link>
              <div
                className={
                  toggleSignup === true
                    ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                    : 'dn ma0 w-100'
                }
              >
                <Route exact path='/signup' component={handleSignup} />
              </div>

              {/* LOGIN SECTION */}
              <Link
                className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                // name='login'
                // onClick={handleClick}
                  to="/login"
                  onClick={() => dispatch(toggleLoginState())}
              >
                <span
                  className={toggleLogin === true ? 'dot dot-active' : 'dot'}
                ></span>
                Login
              </Link>
              <div
                className={
                  toggleLogin === true
                    ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                    : 'dn ma0 w-100'
                }
              >
                {/* login paragraph */}
                <Route exact path='/login' component={handleLogin} />
                <Route
                    exact
                    path='/password/reset/'
                    component={handlePasswordReset}
                  />
              </div>

              {/* CART SECTION */}
              <Link
                className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
                // name='cart'
                // onClick={handleClick}
                //   to="/checkout"
                onClick={() => dispatch(toggleCartState())}
              >
                <span
                  className={toggleCart === true ? 'dot dot-active' : 'dot'}
                ></span>
                Cart
              </Link>
              <p
                className={
                  toggleCart === true
                    ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                    : 'dn ma0 w-100'
                }
              >
                cart paragraph
              </p>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <NavBar handleMenuClick={handleMenuClick} />
        <Menu />
      </>
    );
  }
}

export default withRouter(App);
