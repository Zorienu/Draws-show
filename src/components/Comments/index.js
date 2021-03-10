import { useState } from "react";
import { useSelector } from "react-redux";
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

import { useDispatch } from "react-redux";
import { deleteComment } from "redux/postsSlice";

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
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const handleDeleteComment = (commentId) => {
    console.log("aaa");
    dispatch(deleteComment({ postId, commentId }));
  };

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
            <Comment
              comment={comment}
              handleDeleteComment={handleDeleteComment}
              key={comment._id}
              profile={profile}
            />
          ))}
        </div>
      </Collapse>

      {profile ? (
        <AddComment id={postId} setShowComments={setShowComments} />
      ) : (
        <Box mt={1}>
          <Typography>Login to comment a post</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Comments;
