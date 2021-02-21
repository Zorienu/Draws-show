import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@material-ui/core";

// components
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Login from "pages/Login";

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
