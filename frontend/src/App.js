import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import React, { Component, useState } from "react";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    user: "",
    comments: [],
  };

  // Toggle logged in and out states and render
  // const [login, setLogin] = useState(false);
  // <button onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>

  handleLogout = () => {};

  setUser = () => {};

  setComments = () => {};

  componentDidMount() {}

  useEffect(() => {
    window.scroll(0,0)
  }, []);

  // how to fetch id from URL:
  // import { useParams } from 'react-router-dom';
  // const { id } = useParams()

  // const query = new URLSearchParams(useLocation().search)
  // this hook includes pathname and search props
  // <h2>{query.get("first")}</h2>
  // <h2>{query.get("last")}</h2>

  render() {
    return;
    <Router basename="patreon">
      <Navigation />
      <Route path="/" component={Name} exact />
      <Route path="/login" component={Name} />
      <Route path="/signup" component={Name} />
      <Route path="/user/:name" component={Name} />
      <Route path="/creator/:name" component={Name} />
      <Route path="/profile">
        {/* use a useEffect hook with useHistory hook in Profile component */}
        {/* const history = useHistory */}
        {/* useEffect(() => { if(!login) {history.push('/')}}, []); */}
        <Profile login={login} />
        {/* { login ? <Profile/> : <Redirect to="/"/> } */}
      </Route>
      <Route component={NotFound} />
    </Router>;
  }
}

export default withRouter(App);
