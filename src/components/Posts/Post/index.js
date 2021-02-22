import { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
  Box,
  Collapse,
} from "@material-ui/core";
import { Favorite, FavoriteBorder, ModeCommentOutlined } from "@material-ui/icons";

import useStyles from "./styles.js";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id } = img;
  const [like, setLike] = useState(true);
  const [showComment, setShowComment] = useState(false);

  const handleClickComment = (e) => {
    setShowComment(!showComment);
  };

  return (
    <Grid item container xs={12} md={6} justify="center" alignItems="baseline">
      <Paper elevation={5} className={classes.postContainer}>
        <Box m={1}>
          <Grid item container alignItems="center" spacing={1} m={2}>
            <Grid item>
              <Avatar>{author.charAt(0)}</Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6" noWrap>
                {author}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <img className={classes.img} src={url} alt="test" />

        <Box m={1}>
          <Button
            startIcon={like ? <Favorite /> : <FavoriteBorder />}
            color={like ? "secondary" : "default"}
            onClick={() => setLike(!like)}
          >
            {id} Likes
          </Button>
          <Button startIcon={<ModeCommentOutlined />} onClick={handleClickComment}>
            Comments
          </Button>
        </Box>
      </Paper>
      <Collapse in={showComment}>
        <Paper className={classes.comment}></Paper>
      </Collapse>
    </Grid>
  );
};

export default Post;
