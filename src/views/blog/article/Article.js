import React, { useState } from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCard from "./ArticleCard";
import {
  Grid
} from "@material-ui/core";
import { useStylesArticle } from "./articleStyles";
import BlogMenu from "../BlogMenu";

const Article = () => {
  const [loading] = useState(false);
  const [skeletonNumber] = useState([1, 2, 3, 4, 5, 6]);
  const [articles] = useState([
    {
      id: "2tr4d",
      title: "Articulo 1",
      descripction: "Descripcion 1",
      creationDate: new Date(),
    },
    {
      id: "jkty54",
      title: "Articulo 2",
      descripction: "Descripcion 2",
      creationDate: new Date(),
    },
    {
      id: "hmghdf",
      title: "Articulo 3",
      descripction: "Descripcion 3",
      creationDate: new Date(),
    },
    {
      id: "65756",
      title: "Articulo 4",
      descripction: "Descripcion 4",
      creationDate: new Date(),
    },
    {
      id: "ghnfg",
      title: "Articulo 5",
      descripction: "Descripcion 5",
      creationDate: new Date(),
    },
    {
      id: "gdgh",
      title: "Articulo 6",
      descripction: "Descripcion 6",
      creationDate: new Date(),
    },
  ]);

  const styles = useStylesArticle();

  return (
    <div className={styles.articles}>
      <Grid container justify="center">
        <BlogMenu />
      </Grid>
      <Grid container justify="center">
        {loading
          ? skeletonNumber.map((number) => {
              return <ArticleCardSkeleton key={number} />;
            })
          : articles.map((article) => {
              return <ArticleCard key={article.id} article={article} />;
            })}
      </Grid>
    </div>
  );
};

export default Article;
