import { Button } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        startIcon={isLiked ? <Favorite /> : <FavoriteBorder />}
        color={isLiked ? "secondary" : "default"}
      >
        4 likes
      </Button>
    </div>
  );
};

export default LikeButton;
