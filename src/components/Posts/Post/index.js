import { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { Favorite, FavoriteBorder, ModeCommentOutlined } from "@material-ui/icons";

import AvatarAndName from "components/AvatarAndName";
import Comments from "components/Comments";
import AddComment from "components/AddComment";

import useStyles from "./styles.js";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id, height, width } = img;
  const ratio = height / width;
  const containerHeight = 547.188 * ratio;
  console.log(containerHeight);

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.root} style={{ height: containerHeight }}>
        <img className={classes.img} src={url} alt={author} />
        <CardContent className={classes.content}>
          <AvatarAndName name={author} />
          <Typography variant="subtitle1">Comments</Typography>
          <Comments />
          <AddComment />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Post;
