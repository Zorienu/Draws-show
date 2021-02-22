import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// components
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Login from "pages/Login";

// theme
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="md">
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
    </ThemeProvider>
  );
}

export default App;
