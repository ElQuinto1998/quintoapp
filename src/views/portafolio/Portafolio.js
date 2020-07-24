import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";
import { Container } from "@material-ui/core";

const Portafolio = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_PORTAFOLIO} />
      <Container>
        <h2 style={{ color: "white" }}>Portafolio en construcción</h2>
      </Container>
    </>
  );
};

export default Portafolio;
