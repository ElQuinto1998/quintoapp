import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStylesArticle } from "./articleStyles";

const ArticleCardSkeleton = () => {
  const classes = useStylesArticle();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        action={null}
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="50%" />}
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default ArticleCardSkeleton;
