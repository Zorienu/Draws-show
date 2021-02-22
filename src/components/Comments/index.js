import { makeStyles } from "@material-ui/core";

import Comment from "./Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    overflowX: "hidden",
  },
}));

const Comments = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;