import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoint.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoint.up("sm")]: {
      display: "none",
    },
  },
}));
