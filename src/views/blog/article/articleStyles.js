import { makeStyles } from "@material-ui/core/styles";

export const useStylesArticle = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    alignContent: "center",
    margin: theme.spacing(5),
  },
  media: {
    height: 190,
    width: 345,
  },
  articles: {
    backgroundColor: "white",
    height: "100%",
  }
}));
