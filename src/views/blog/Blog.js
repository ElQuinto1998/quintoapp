import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";

export const Blog = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_BLOG}/>
      <h2 style={{color: 'white'}}>Bienvenido a mi blog</h2>
    </>
  );
};
