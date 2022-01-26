import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Winkelmand.css";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "./CheckoutPage";

{
  /*winkel mand items uit de state halen */
}
const WinkelMand = () => {
  const WinkelMandItems = [];
  return (
    <div className="Producten">
      {WinkelMandItems.map((data) => (
        <div className="WinkelmandItem" key={data.id}>
          <h2 className="WinkelmandItem_naam">{data.naam}</h2>
          <p className="WinkelmandItem_merk">Merk: {data.merk}</p>
          <p className="WinkelmandItem_prijs">Prijs Per: ${data.prijs}</p>
          <p className="WinkelmandItem_prijs">Aantal: {data.aantalStuks}</p>

          <button className="DeleteButton">Verwijder</button>
        </div>
      ))}
      <Link to="/checkout">
        <button renderAs="button">
          <span>Check Out</span>
        </button>
      </Link>
    </div>
  );
};

export default WinkelMand;
