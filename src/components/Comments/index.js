import { useState } from "react";
import {
  Box,
  Collapse,
  Paper,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Comment from "./Comment";
import AddComment from "components/AddComment";

const useStyles = makeStyles((theme) => ({
  comments: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "200px",
    width: "100%",
  },
  commentContainer: {
    padding: "10px",
    marginTop: "10px",
  },
  commentSubtitle: {
    flex: 1,
  },
}));

const Comments = ({ comments, postId }) => {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);

  return (
    <Paper className={classes.commentContainer} elevation={3}>
      <Box display="flex">
        <Typography className={classes.commentSubtitle} variant="h6">
          {comments.length} Comments
        </Typography>
        <IconButton
          disabled={!comments.length}
          onClick={() => setShowComments(!showComments)}
        >
          <ExpandMore />
        </IconButton>
      </Box>

      <Collapse in={showComments}>
        <div className={classes.comments}>
          {comments.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      </Collapse>

      <AddComment id={postId} />
    </Paper>
  );
};

export default Comments;
