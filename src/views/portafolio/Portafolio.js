import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";

const Portafolio = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_PORTAFOLIO} />
      <h2 style={{ color: "white" }}>Portafolio en construcción</h2>
    </>
  );
};

export default Portafolio;
