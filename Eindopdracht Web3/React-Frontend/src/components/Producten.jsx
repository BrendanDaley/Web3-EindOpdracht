import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducten } from "../Redux/Slices/ProductSlice";
import "./Css/Producten.css";
import { Button } from "@mui/material";
import FooterComponent from "./FooterComponent";
const axios = require("axios");

const Products = () => {
  const dispatch = useDispatch();

  const productenState = useSelector((state) => state.producten);

  const [aantal, setAantal] = useState(0);

  const Increase = (event) => {
    setAantal(aantal + 1);
  };

  const Decrease = () => {
    if (aantal == 0) {
      setAantal(0);
    } else {
      setAantal(aantal - 1);
    }
  };

  useEffect(() => {
    dispatch(FetchProducten());
  }, []);

  return (
    <div>
      <div className="Producten">
        {productenState.data.map((data) => (
          <div className="Product" key={data.id}>
            <h1 className="product_naam">{data.naam}</h1>
            <img className="product_img" src={data.imageLink} />
            <p className="product_merk">Merk: {data.merk}</p>
            <p className="product_prijs">Prijs: ${data.prijs}</p>
            <p className="product_aantal">Aantal: {aantal}</p>
            <div className="QantityButtons">
              <Button
                variant="contained"
                className="Subtract"
                onClick={Decrease}
              >
                -
              </Button>
              <Button variant="contained" className="Add" onClick={Increase}>
                +
              </Button>
            </div>
            <Button variant="contained" className="AddToCart">
              Voeg Toe
            </Button>
          </div>
        ))}
      </div>
      <div className="Footer">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Products;
