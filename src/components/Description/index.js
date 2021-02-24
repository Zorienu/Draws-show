import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    flex: 1,
    marginTop: "10px",
  },
}));

const Description = ({ description }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default Description;
