import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { particles } from "../../constants/particlesParams";
import { constantes } from "../../constants/constants";

import Particles from "react-particles-js";
import { ContactPhoneSharp } from "@material-ui/icons";

const useStyles = makeStyles({
  particles: {
    position: "absolute",
    opacity: "0.6",
  },
});

export const Home = () => {
  const styles = useStyles();

  return (
    <>
      <Navbar title={constantes.TITULO_INICIO} />
      <Header />
      <Particles canvasClassName={styles.particles} params={{ particles }} />
    </>
  );
};
