import { makeStyles } from "@material-ui/core";

//background: "linear-gradient(to right, #0083b0, #00b4db)",
export default makeStyles(() => ({
  appBar: {
    background: "linear-gradient(to bottom, #fff, #eee)",
    color: "#111",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: "64px",
    transform: "scaleX(-1)",
  },
  logo: {
    fontFamily: "Permanent Marker",
    lineHeight: "1.5",
  },
  offset: {
    marginTop: "100px",
  },
}));
