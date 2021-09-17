import About from "./About";
import Home from "./Home";
import Post from "./Post";
import PostOne from "./PostOne";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink exact activeStyle={{ color: "green" }} to="/">Home</NavLink>
          <NavLink activeclass="active" to="/about">About</NavLink>
          <NavLink to="/post">Post</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:id" component={PostOne} />
          <Route path="/post" component={Post} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="*" component={NotFound} />

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
