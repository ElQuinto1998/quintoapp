import React from "react";
import { List, ListItem, ListItemText, makeStyles, ListItemIcon } from "@material-ui/core";
import BookTwoToneIcon from "@material-ui/icons/BookTwoTone";
import VideoCallTwoToneIcon from "@material-ui/icons/VideoCallTwoTone";
import PermMediaTwoToneIcon from "@material-ui/icons/PermMediaTwoTone";
import { Link } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "row",
    padding: 7,
  },
  menu: {
    backgroundColor: "white",
    color: "tomato"
  }
}));

const BlogMenu = () => {
  const styles = useStyles();

  return (
    <div className={styles.menu}>
      <List component="nav" className={styles.list}>
        <ListItem button component={Link} to={"/"}>
          <ListItemIcon>
            <BookTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Artículos" />
        </ListItem>
        <ListItem button component={Link} to={"/"}>
          <ListItemIcon>
            <VideoCallTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button component={Link} to={"/"}>
          <ListItemIcon>
            <PermMediaTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Imágenes" />
        </ListItem>
      </List>
    </div>
  );
};

export default BlogMenu;
