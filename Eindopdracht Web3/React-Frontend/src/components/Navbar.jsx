import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SHOE STORE.</h1>
      <div>
        <a href="/">Home</a>
        <a href="/producten">Shop</a>
        <a href="/winkelmand"> Winkelmand</a>
      </div>
    </nav>
  );
};

export default Navbar;
