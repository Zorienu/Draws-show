import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Paper,
  makeStyles,
  Accordion,
} from "@material-ui/core";

import Comment from "./Comment";

const useStyles = makeStyles((theme) => ({
  comments: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "100%",
    width: "100%",
  },
  details: {
    height: "200px",
  },
  root: {
    marginTop: "10px",
    paddingRight: "30px",
  },
}));

const Comments = () => {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary>
        <Typography variant="subtitle1">Comments</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.details}>
        <div className={classes.comments}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Comments;
