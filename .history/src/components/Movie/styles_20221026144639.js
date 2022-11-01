import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "0",
    textAlign: "center",
  },
}));
