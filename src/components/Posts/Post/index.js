import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

import useStyles from "./styles.js";

import testImg from "images/test.jpg";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id } = img;
  console.log(img);

  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={3}>
        <Typography variant="h6">{author}</Typography>
        <img className={classes.img} src={url} alt="test" />
        <Button startIcon={<Favorite />} color="secondary">
          {id} Likes
        </Button>
      </Paper>
    </Grid>
  );
};

export default Post;
