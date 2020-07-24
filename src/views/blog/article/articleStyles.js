import {makeStyles} from "@material-ui/core/styles";

export const useStylesArticle = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        alignContent: "center",
        margin: theme.spacing(2),
      },
      media: {
        height: 190,
      }
}));