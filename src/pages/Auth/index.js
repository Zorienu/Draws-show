import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

import Input from "components/Input";

import useStyle from "./style.js";

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

  const handleShowPassword = () => {
    console.log("aa");
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    console.log("aaa");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

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
              <Button variant="contained" color="primary" fullWidth>
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
