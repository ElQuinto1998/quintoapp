import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { constantes } from "../../constants/constants";
import Article from "./article/Article";

export const Blog = () => {
  return (
    <>
      <Navbar title={constantes.TITULO_BLOG} />
      <Article />
    </>
  );
};
