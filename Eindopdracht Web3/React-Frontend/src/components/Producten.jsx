import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducten } from "../Redux/Slices/ProductSlice";
import "./Css/Producten.css";
const axios = require("axios");

const Products = () => {
  const dispatch = useDispatch();

  const productenState = useSelector((state) => state.producten);

  const [aantal, setAantal] = useState(0);

  useEffect(() => {
    dispatch(FetchProducten());
  }, []);
  return (
    <div className="Producten">
      {productenState.data.map((data) => (
        <div className="Product" key={data.id}>
          <h1 className="product_naam">{data.naam}</h1>
          <img className="product_img" src={data.imageLink} />
          <p className="product_merk">Merk: {data.merk}</p>
          <p className="product_prijs">Prijs: ${data.prijs}</p>
          <p className="product_aantal">Aantal: {aantal}</p>
          <div className="QantityButtons">
            <button className="add">-</button>
            <button className="subtract">+</button>
          </div>
          <button>Voeg Toe</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
