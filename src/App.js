import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// components
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Auth from "pages/Auth";

// theme
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
