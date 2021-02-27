import { Button, AppBar, Box, Toolbar, Typography, Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// styles
import useStyles from "./styles";

import pencil from "./pencil.svg";

import { logout } from "redux/userSlice";

const Navbar = () => {
  const classes = useStyles();
  const profile = useSelector((state) => state.user.profile) || null;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSingin = () => history.push("/auth");

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.navBar}>
          <Box display="flex" alignItems="center">
            <Typography className={classes.logo} variant="h4">
              Draws' show
            </Typography>
            <img className={classes.image} src={pencil} alt="pencil" />
          </Box>

          <Box display="flex">
            {profile ? (
              <>
                <Avatar>{profile?.firstName?.charAt(0)}</Avatar>
                <Box display={{ xs: "none", sm: "flex" }} alignItems="center">
                  <Box mx={1}>
                    <Typography variant="h6">{`${profile?.firstName} ${profile?.lastName}`}</Typography>
                  </Box>
                  <Box mx={1}>
                    <Button variant="outlined" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Box>
                </Box>
              </>
            ) : (
              <Box mx={1}>
                <Button variant="outlined" onClick={handleSingin}>
                  Sign in
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
