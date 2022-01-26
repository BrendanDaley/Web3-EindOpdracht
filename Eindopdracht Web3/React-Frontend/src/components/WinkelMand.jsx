import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Winkelmand.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useEffect } from "react";

{
  /*winkel mand items uit de state halen */
}

const WinkelMand = () => {
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
    WinkelMandItems.map((WinkelMandItem) => {
      totaal += WinkelMandItem.aantal * WinkelMandItem.prijs;
    });
    setTotaalPrijs(totaal);
  };

  const DeleteItem = (id) => {
    const gefilterdeArray = WinkelMandItems.filter((item) => item.id !== id);
    setWinkelMandItems(gefilterdeArray);
  };

  useEffect(() => {
    berekenTotaalPrijs();
  });

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
        {WinkelMandItems.map((data) => (
          <div className="WinkelmandItem" key={data.id}>
            <p className="naam">{data.naam}</p>
            <p className="prijs">Prijs pers stuk: ${data.prijs}</p>
            <p className="aantal">Aantal: {data.aantal}</p>
            <Button
              className="DeleteButton"
              variant="contained"
              onClick={() => {
                DeleteItem(data.id);
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
