import { makeStyles } from "@material-ui/core";

//background: "linear-gradient(to right, #0083b0, #00b4db)",
export default makeStyles(() => ({
  appBar: {
    background: "linear-gradient(to bottom, #fff, #eee)",
    color: "#111",
    height: "64px",
  },
  navBar: {
    display: "flex",
  },
  image: {
    height: "100%",
    transform: "scaleX(-1)",
  },
  logo: {
    fontFamily: "Permanent Marker",
    lineHeight: "1.5",
  },
  logout: {
    marginLeft: "auto",
  },
  offset: {
    marginTop: "100px",
  },
}));
