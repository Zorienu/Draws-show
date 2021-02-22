import { Avatar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0",
    display: "flex",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  content: {
    marginLeft: theme.spacing(1),
  },
}));

const Comment = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>J</Avatar>
      <div className={classes.content}>
        <Typography variant="subtitle2">Jasyd Caballero</Typography>
        <Typography variant="body2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsum.
        </Typography>
      </div>
    </div>
  );
};

export default Comment;
