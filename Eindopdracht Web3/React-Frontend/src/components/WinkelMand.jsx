import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Winkelmand.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchWinkelmandItems, removeItem } from "../Redux/Slices/CartSlice";
import { Button } from "@mui/material";
import { useEffect } from "react";

{
  /*winkel mand items uit de state halen */
}

const WinkelMand = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const [totaalPrijs, setTotaalPrijs] = useState();

  const [WinkelMandItems, setWinkelMandItems] = useState([
    {
      id: 1,
      naam: "Solid Gold OVO x Air Jordans",
      merk: "Air Jordan",
      prijs: 500,
      aantal: 2,
    },
    {
      id: 2,
      naam: "Solid Gold OVO x Air Jordans",
      merk: "Air Jordan",
      prijs: 2000,
      aantal: 2,
    },
  ]);

  const berekenTotaalPrijs = () => {
    let totaal = 0;
    cartState.map((WinkelMandItem) => {
      totaal += WinkelMandItem.aantal * WinkelMandItem.prijs;
    });
    setTotaalPrijs(totaal);
  };

  useEffect(() => {
    //dispatch(FetchWinkelmandItems());
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
      <div className="Producten">
        {cartState.map((data) => (
          <div className="WinkelmandItem" key={data.id}>
            <p className="naam">{data.naam}</p>
            <p className="prijs">Prijs pers stuk: ${data.prijs}</p>
            <p className="aantal">Aantal: {data.aantal}</p>
            <Button
              className="DeleteButton"
              variant="contained"
              onClick={() => {
                dispatch(removeItem(data));
              }}
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
