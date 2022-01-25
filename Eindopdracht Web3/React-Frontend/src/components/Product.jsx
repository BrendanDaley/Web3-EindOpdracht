import { React, useState } from "react";
import "./Css/Product.css";
//import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const voegToeAanWinkelmand = (id, hoeveelheid) => {};
  const [aantalStuks, setAantalStuks] = useState(0);
  return (
    <div className="Product" key={data.id}>
      <h1 className="product_naam">{data.naam}</h1>
      <img className="product_img" src={data.imageLink} />
      <p className="product_merk">Merk: {data.merk}</p>
      <p className="product_prijs">Prijs: ${data.prijs}</p>
      <p className="product_aantal">Aantal: {aantalStuks}</p>
      <div className="QantityButtons">
        <button className="add">-</button>
        <button className="subtract">+</button>
      </div>
      {/* u reducer gebruiken*/}
      <button onClick={voegToeAanWinkelmand()}>Voeg Toe</button>
    </div>
  );
};

export default Product;
