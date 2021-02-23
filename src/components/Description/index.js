import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    flex: 1,
    marginTop: "10px",
  },
}));

const Description = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus temporibus
        perferendis nobis. Optio voluptatibus velit error praesentium dolor rerum vero
        facilis nesciunt harum. Laboriosam obcaecati illum doloribus molestias earum Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nesciunt quod fugit
        accusantium quibusdam hic dolorum! Distinctio temporibus aperiam debitis dolor
        quidem at officia maiores voluptate similique, aliquid ducimus ex. lorem Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum corporis facere
        sed optio. Quisquam sint, laboriosam natus totam molestiae assumenda amet quam
        nostrum aspernatur nobis facilis accusamus vel! Architecto? consequatur.
      </Typography>
    </div>
  );
};

export default Description;
