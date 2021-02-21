import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import { getImages } from "api/Images";
import Post from "./Post";

const Posts = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then(({ data }) => setImages(data));
  }, []);

  return (
    <Grid container spacing={3}>
      {images.map((img) => (
        <Post img={img} key={img.id} />
      ))}
    </Grid>
  );
};

export default Posts;
