import { AppBar, Box, Button, Toolbar, Typography, Avatar } from "@material-ui/core";

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
          <Box display="flex" alignItems="center">
            <Typography className={classes.logo} variant="h4">
              Draws' show
            </Typography>
            <img className={classes.image} src={pencil} alt="pencil" />
          </Box>

          <Box display="flex">
            <Avatar>{author.charAt(0)}</Avatar>
            <Box display={{ xs: "none", sm: "flex" }} alignItems="center">
              <Box mx={1}>
                <Typography variant="h6">{author}</Typography>
              </Box>
              <Box mx={1}>
                <Button variant="outlined">Logout</Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
