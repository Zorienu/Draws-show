import { Paper, Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles.js";

import testImg from "images/test.jpg";

const Post = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={3}>
        <Typography variant="h6">Jasyd</Typography>
        <img className={classes.img} src={testImg} alt="test" />
        <Button>Like</Button>
      </Paper>
    </Grid>
  );
};

export default Post;
