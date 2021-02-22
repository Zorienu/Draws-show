import { useState } from "react";
import { Paper, Grid, Typography, Button, Avatar, Box } from "@material-ui/core";
import { Favorite, FavoriteBorder, ModeCommentOutlined } from "@material-ui/icons";

import useStyles from "./styles.js";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id } = img;
  const [like, setLike] = useState(true);

  return (
    <Grid item xs={12} justify="center" alignItems="baseline">
      <Paper elevation={5} className={classes.postContainer}>
        <Grid container>
          <Grid item xs={7}>
            <img className={classes.img} src={url} alt="test" />
          </Grid>

          <Grid container item xs={5}>
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

            <Box m={1}>
              <Button
                startIcon={like ? <Favorite /> : <FavoriteBorder />}
                color={like ? "secondary" : "default"}
                onClick={() => setLike(!like)}
              >
                {id} Likes
              </Button>
              <Button startIcon={<ModeCommentOutlined />}>Comments</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Post;
