import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.pallete.text.primary,
    textOverflow: "ellipsis",
  },
}));
