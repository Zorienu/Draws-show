import { useState } from "react";
import {
  Collapse,
  IconButton,
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import { Favorite, FavoriteBorder, ExpandMore } from "@material-ui/icons";

import AvatarAndName from "components/AvatarAndName";
import Comments from "components/Comments";
import AddComment from "components/AddComment";
import LikeButton from "components/LikeButton";
import Description from "components/Description";

import useStyles from "./styles.js";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id, height, width } = img;
  const ratio = height / width;
  const containerHeight = 547.188 * ratio;

  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.root} style={{ height: containerHeight }}>
        <img className={classes.img} src={url} alt={author} onDoubleClick={handleLike} />
        <CardContent className={classes.content}>
          <AvatarAndName name={author} />
          <Description />
          <LikeButton onClick={handleLike} isLiked={isLiked} />
        </CardContent>
      </Card>

      <Paper className={classes.commentContainer} elevation={3}>
        <Box display="flex">
          <Typography className={classes.commentSubtitle} variant="h6">
            Comments
          </Typography>
          <IconButton onClick={() => setShowComments(!showComments)}>
            <ExpandMore />
          </IconButton>
        </Box>
        <Collapse in={showComments}>
          <Comments />
        </Collapse>
        <AddComment />
      </Paper>
    </Grid>
  );
};

export default Post;
