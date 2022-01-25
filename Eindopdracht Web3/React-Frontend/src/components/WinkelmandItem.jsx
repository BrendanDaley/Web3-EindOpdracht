import React, { useState } from "react";

const WinkelmandItem = ({ data }) => {
  const [aantalStuks, setAantalStuks] = useState(0);
  return (
    <div className="WinkelmandItem">
      <h2 className="WinkelmandItem_naam">{data.naam}</h2>
      <p className="WinkelmandItem_merk">Merk: {data.merk}</p>
      <p className="WinkelmandItem_prijs">Prijs Per: ${data.prijs}</p>
      <p className="WinkelmandItem_prijs">Aantal: {aantalStuks}</p>

      <button className="DeleteButton">Verwijder</button>
    </div>
  );
};

export default WinkelmandItem;
