import React from "react";
import { useStylesArticle } from "./articleStyles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Card,
  Typography,
} from "@material-ui/core";

const ArticleCard = ({article}) => {
  console.log(article);
  const classes = useStylesArticle();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            alt="Ted talk"
            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={"Ted"}
        subheader={"5 hours ago"}
      />
      <CardMedia
        className={classes.media}
        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
        title="Ted talk"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {
            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
          }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
