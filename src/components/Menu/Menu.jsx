import React from "react";
import Search from "../Search/Search";
import "./Menu.css";
import dib from '../../img/libro1.gif'

function Menu() {
  return (
    <div className="container">
      <img className="logo" src={dib} alt="" />
      <div className="Title">Libros Gratuitos</div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
}

export default Menu;
