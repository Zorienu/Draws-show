import { IconButton, Box, Avatar, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createComment } from "redux/postsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0",
    display: "flex",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  textField: {
    marginLeft: "10px",
  },
}));

const AddComment = ({ id, setShowComments }) => {
  const classes = useStyles();

  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (e) => setComment(e.target.value);

  const handleCreateComment = () => {
    dispatch(createComment({ id, comment }));
    setShowComments(true);
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar className={classes.avatar}>{profile.firstName.charAt(0)}</Avatar>
      <TextField
        className={classes.textField}
        size="small"
        label="Write something"
        color="primary"
        value={comment}
        fullWidth
        onChange={handleChange}
      />
      <IconButton onClick={handleCreateComment} disabled={comment.length === 0}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default AddComment;
