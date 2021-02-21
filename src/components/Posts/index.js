import { Grid } from "@material-ui/core";
import Post from "./Post";

const Posts = () => {
  return (
    <Grid container spacing={3}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Grid>
  );
};

export default Posts;
