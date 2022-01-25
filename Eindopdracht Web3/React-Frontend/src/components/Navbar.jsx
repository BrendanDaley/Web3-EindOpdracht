import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shoe Store.</h1>
      <div>
        <a href="/">Home</a>
        <a href="/producten">Producten</a>
        <a href="/winkelmand"> Winkel mandje</a>
        <a href="/about">Over Ons</a>
      </div>
    </nav>
  );
};

export default Navbar;
