import React from "react";
import { makeStyles, Typography, Grid, Container } from "@material-ui/core";
import { constantes } from "../../../constants/constants";
import { Navbar } from "../../../components/navbar/Navbar";
import BlogMenu from "../BlogMenu";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    top: 20,
    bottom: 20,
    backgroundImage:
      "url(https://pixabay.com/es/photos/personas-hombre-mujer-cuerpo-2576110/)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: 10,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  postDiv: {
    backgroundColor: "white",
    height: "100%",
    position: "relative"
  },
  title: {
    color: "#7eaad7",
  },
}));

const ArticleDetail = () => {
  const styles = useStyles();

  const mainFeaturedPost = {
    title: "Amor en tiempos de cuarentena",
    description:
      "Artículo dedicado a todas esas personas que por motivos de cuarentena su relación esta en peligro, veras cómo aún puedes avivar la llama del amor.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/06/02/couple-1867688_960_720.jpg",
    imgText: "main image description",
    createdDate: "Andres Quinto - 25/07/2020",
  };

  return (
    <div className={styles.postDiv}>
      <Navbar title={constantes.TITULO_BLOG} />
      <Container maxWidth="lg">
        <Grid
          container
          className={styles.mainFeaturedPost}
          style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}
        >
          {
            <img
              style={{ display: "none" }}
              src={mainFeaturedPost.image}
              alt={mainFeaturedPost.imageText}
            />
          }
          <div className={styles.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={styles.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  className={styles.title}
                >
                  {mainFeaturedPost.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {mainFeaturedPost.description}
                </Typography>
                <Typography variant="subtitle1">
                  {mainFeaturedPost.createdDate}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container justify="center">
          <BlogMenu />
        </Grid>
      </Container>
    </div>
  );
};

export default ArticleDetail;
