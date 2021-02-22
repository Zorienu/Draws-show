import { Paper, Grid, Typography, Button, Avatar, Box } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

import useStyles from "./styles.js";

const Post = ({ img }) => {
  const classes = useStyles();
  const { author, download_url: url, id } = img;
  console.log(img);

  return (
    <Grid item container xs={12} sm={6} justify="center" alignItems="baseline">
      <Paper elevation={5}>
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
          <Button startIcon={<Favorite />} color="secondary">
            {id} Likes
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Post;
