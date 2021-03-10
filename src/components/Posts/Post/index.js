import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

// components
import AvatarAndName from "components/AvatarAndName";
import Comments from "components/Comments";
import LikeButton from "components/LikeButton";
import Description from "components/Description";

// hooks
import useStyles from "./styles.js";
import useContainerHeight from "hooks/useContainerHeight.js";

// redux
import { useDispatch } from "react-redux";
import { likePost } from "redux/postsSlice";

const Post = ({ post, profile }) => {
  const classes = useStyles();

  const { author, selectedFile: url, description, comments, _id: id } = post;
  const containerHeight = useContainerHeight(url);
  const dispatch = useDispatch();
  const isLiked = post.likes.find((like) => like === profile?.id);

  const handleLike = () => dispatch(likePost(post._id));

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.root} style={{ height: containerHeight }}>
        <img className={classes.img} src={url} alt={author} onDoubleClick={handleLike} />
        <CardContent className={classes.content}>
          <AvatarAndName name={author} />
          <Description description={description} />
          <LikeButton onClick={handleLike} isLiked={isLiked} />
        </CardContent>
      </Card>

      <Comments comments={comments} postId={id} />
    </Grid>
  );
};

export default React.memo(Post);
