import { Box, Avatar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  name: {
    marginLeft: "10px",
  },
}));

const AvatarAndName = ({ name, picture = null }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Avatar>{picture || name.charAt(0)}</Avatar>
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
    </Box>
  );
};

export default AvatarAndName;
