import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Winkelmand.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Slices/Cart/cartAction";
import { Button } from "@mui/material";
import { useEffect } from "react";

const WinkelMand = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { cartItems } = cartState;
  const [totaalPrijs, setTotaalPrijs] = useState();

  const berekenTotaalPrijs = () => {
    let totaal = 0;
    cartItems.map((WinkelMandItem) => {
      totaal += WinkelMandItem.aantal * WinkelMandItem.prijs;
    });
    setTotaalPrijs(totaal);
  };

  useEffect(() => {
    berekenTotaalPrijs();
  }, []);

  return (
    <div>
      <div className="CheckoutDiv">
        <div className="TotaalPrijs">
          <p>Totaal Prijs: ${totaalPrijs}</p>
        </div>
        <div className="CheckoutButton">
          <Link to="/checkout">
            <Button variant="contained">Naar Checkout</Button>
          </Link>
        </div>
      </div>
      <div className="Winkelmand">
        {cartItems.map((data) => (
          <div className="WinkelmandItem" key={data.id}>
            <p className="naam">{data.naam}</p>
            <p className="prijs">Prijs pers stuk: ${data.prijs}</p>
            <p className="aantal">Aantal: {data.aantal}</p>
            <Button
              className="DeleteButton"
              variant="contained"
              onClick={() => dispatch(removeFromCart(data.id))}
            >
              Verwijder Item
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinkelMand;
