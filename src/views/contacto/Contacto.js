import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";

const Contacto = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_CONTACTO} />
      <h2 style={{ color: "white" }}>Formulario de contacto</h2>
    </>
  );
};

export default Contacto;
