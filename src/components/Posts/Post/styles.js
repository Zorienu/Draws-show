import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
  },
  img: {
    width: "60%",
    borderRadius: "4px 0 0 4px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
}));
