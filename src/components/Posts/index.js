import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";

import { getPosts } from "redux/postsSlice";

const Posts = () => {
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    //fetchPosts().then(({ data }) => setImages(data));
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </Grid>
  );
};

export default Posts;
