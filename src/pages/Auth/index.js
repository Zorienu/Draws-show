import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "components/Input";

import useStyle from "./style.js";

import { useDispatch } from "react-redux";
import { signin, signup } from "redux/userSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyle();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isSignup) {
      dispatch(signup(data));
    } else {
      dispatch(signin(data));
      history.push("/");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={5} className={classes.paper}>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  label="First Name"
                  name="firstName"
                  value={data.firstName}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={data.lastName}
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              label="email"
              name="email"
              value={data.email}
              handleChange={handleChange}
            />

            <Input
              label="password"
              name="password"
              value={data.password}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
            />

            {isSignup && (
              <Input
                label="Confirm password"
                name="confirmPassword"
                value={data.confirmPassword}
                handleChange={handleChange}
                type="password"
              />
            )}

            <Grid item xs={12}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
              >
                {isSignup ? "Sign up" : "Sign in"}
              </Button>
            </Grid>
            <Grid item>
              {!isSignup && (
                <Button fullWidth onClick={() => setIsSignup(!isSignup)}>
                  Don't have an account yet? create one
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
