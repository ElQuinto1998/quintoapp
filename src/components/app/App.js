import React from "react";
import "./App.css";
import { Home } from "../../views/home/Home";
import { Route } from "react-router-dom";
import { Resume } from "../../views/resume/Resume";
import { Blog } from "../../views/blog/Blog";
import Portafolio from "../../views/portafolio/Portafolio";
import Contacto from "../../views/contacto/Contacto";
import ArticleDetail from "../../views/blog/article/ArticleDetail";

function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/resume"} component={Resume} />
      <Route exact path={"/portafolio"} component={Portafolio} />
      <Route exact path={"/contacto"} component={Contacto} />
      <Route exact path={"/blog"} component={Blog} />
      <Route exact path={"/blog/:id"} component={ArticleDetail} />
    </>
  );
}

export default App;
