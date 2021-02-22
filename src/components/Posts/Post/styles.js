import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  img: {
    width: "60%",
    borderRadius: "4px 0 0 4px",
  },
  postContainer: {
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  comment: {
    width: "100%",
    flex: 1,
  },
}));
