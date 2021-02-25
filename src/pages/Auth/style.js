import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));
