import React, { useState } from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCard from "./ArticleCard";
import { Grid, Container } from "@material-ui/core";

const Article = () => {
  const [loading] = useState(false);
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
      id: "jgh",
      title: "Articulo 4",
      descripction: "Descripcion 4",
      creationDate: new Date(),
    },
  ]);

  return (
    <Container>
      <Grid container>
        {loading ? (
          <ArticleCardSkeleton />
        ) : (
          articles.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })
        )}
      </Grid>
    </Container>
  );
};

export default Article;
