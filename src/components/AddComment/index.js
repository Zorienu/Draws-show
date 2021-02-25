import { IconButton, Box, Avatar, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { useDispatch } from "react-redux";

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

const AddComment = ({ id }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleCreateComment = () => {
    console.log("handle create comment");
    dispatch(
      createComment({
        id,
        comment: { comment: "hola desde redux", author: "jasyd", authorId: "jasydId" },
      })
    );
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar className={classes.avatar}>J</Avatar>
      <TextField
        className={classes.textField}
        size="small"
        label="Write something"
        color="primary"
        fullWidth
      />
      <IconButton onClick={handleCreateComment}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default AddComment;
