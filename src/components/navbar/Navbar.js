import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Apps,
  ArrowBack,
  AssignmentInd,
  ContactMail,
  Home,
  ChromeReaderMode,
} from "@material-ui/icons";
import avatar from "../../images/foto.jpg";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { useStylesNavbar } from "./NavbarStyles";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import PropTypes from "prop-types";

export const Navbar = ({ title }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toogleSlider = (slider, open) => {
    setState({ ...state, [slider]: open });
  };

  const styles = useStylesNavbar();

  const menuIcons = [
    {
      listIcon: <Home />,
      listText: "Inicio",
      listPath: "/",
    },
    {
      listIcon: <AssignmentInd />,
      listText: "Experiencia",
      listPath: "/resume",
    },
    {
      listIcon: <Apps />,
      listText: "Portafolio",
      listPath: "/portafolio",
    },
    {
      listIcon: <ChromeReaderMode />,
      listText: "Blog",
      listPath: "/blog",
    },
    {
      listIcon: <ContactMail />,
      listText: "Contacto",
      listPath: "/contacto",
    },
  ];

  const sidevar = (slider) => (
    <Box
      component={"div"}
      className={styles.menuContainer}
      onClick={() => toogleSlider(slider, false)}
    >
      <Avatar src={avatar} alt={"avatar"} className={styles.avatar} />
      <Divider />
      <List>
        {menuIcons.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={styles.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={styles.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component={"nav"} >
        <AppBar position={"static"} className={styles.navBar}>
          <Toolbar>
            <IconButton onClick={() => toogleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant={"h5"} style={{ color: "tan" }}>
              {title}
            </Typography>
            <MobilRightMenuSlider
              anchor={"left"}
              open={state.right}
              onClose={() => toogleSlider("right", false)}
            >
              {sidevar("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
