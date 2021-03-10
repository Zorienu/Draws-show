import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
  deleteBtn: {
    marginLeft: "auto",
    marginRight: "10px",
  },
}));

const Comment = ({ comment, handleDeleteComment }) => {
  const classes = useStyles();

  const handleClick = (e) => handleDeleteComment(comment._id);

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>{comment.author.charAt(0)}</Avatar>
      <div className={classes.content}>
        <Typography variant="subtitle2">{comment.author}</Typography>
        <Typography variant="body2">{comment.comment}</Typography>
      </div>
      <IconButton onClick={handleClick} className={classes.deleteBtn}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Comment;
