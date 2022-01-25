import React, { useState } from "react";
import "./Css/Winkelmand.css";
import WinkelmandItem from "./WinkelmandItem";

const WinkelMand = () => {
  const [WinkelMandItems, setWinkelMandItems] = useState([]);
  return (
    <div className="Producten">
      {WinkelMandItems.map((winkelmandItem) => (
        <WinkelmandItem data={winkelmandItem} />
      ))}
      <button className="OrderButton">Bestel</button>
    </div>
  );
};

export default WinkelMand;
