import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

import pencil from "./pencil.svg";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.navBar}>
          <Typography className={classes.logo} variant="h4">
            Draws' show
          </Typography>
          <img className={classes.image} src={pencil} alt="pencil" />
          <Button className={classes.logout} variant="contained">
            logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
