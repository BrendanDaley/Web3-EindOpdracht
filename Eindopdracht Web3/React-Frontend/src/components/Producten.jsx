import { React, useState, useEffect } from "react";
import "./Css/Producten.css";
import Product from "./Product";
const axios = require("axios");

const Products = () => {
  return (
    <div className="Producten">
      <h1>Alle Producten</h1>
      <Product />
    </div>
  );
};

export default Products;
