import { IconButton, Box, Avatar, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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

const AddComment = () => {
  const classes = useStyles();

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
      <IconButton>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default AddComment;
