import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

import pencil from "./pencil.svg";

const Navbar = () => {
  const classes = useStyles();
  const author = "Jasyd caballero";

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.navBar}>
          <Grid container>
            <Grid item container sm={6} alignItems="center">
              <Grid item>
                <Typography className={classes.logo} variant="h4">
                  Draws' show
                </Typography>
              </Grid>
              <Grid item>
                <img className={classes.image} src={pencil} alt="pencil" />
              </Grid>
            </Grid>

            <Grid
              container
              item
              sm={6}
              spacing={1}
              alignItems="center"
              justify="flex-end"
            >
              <Grid item>
                <Avatar>{author.charAt(0)}</Avatar>
              </Grid>
              <Grid item>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography variant="h6" noWrap>
                    {author}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Button variant="outlined">Logout</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
