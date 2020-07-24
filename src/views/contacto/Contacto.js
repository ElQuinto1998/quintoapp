import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";
import { Container } from "@material-ui/core";

const Contacto = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_CONTACTO} />
      <Container>
        <h2 style={{ color: "white" }}>Formulario de contacto</h2>
      </Container>
    </>
  );
};

export default Contacto;
