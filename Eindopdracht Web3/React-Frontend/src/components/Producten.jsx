import { React, useState, useEffect } from "react";
import "./Css/Producten.css";
import Product from "./Product";
const axios = require("axios");
const Products = () => {
  const [producten, setProducten] = useState([
    {
      id: 1,
      imageLink:
        "https://www.industryleadersmagazine.com/wp-content/uploads/2019/07/06.jpg",
      naam: "Solid Gold OVO x Air Jordans",
      merk: "Air Jordan",
      prijs: 200,
      beschrijving: "testbescrijving lalalalalal",
    },
    {
      id: 2,
      imageLink:
        " https://images.solecollector.com/complex/images/fl_lossy,q_auto/c_scale,w_690,dpr_2.0/v1/pkeceg2wm19pwzn1ejpt/michael-jordan-game-worn-converse-fast-break-high-1982-profile",
      naam: "Michael Jordan’s Game Worn Converse Fastbreak",
      merk: "Air Jordan",
      prijs: 500,
      beschrijving: "testbescrijving lalalalalal",
    },
    {
      id: 3,
      imageLink:
        "https://sneakernews.com/wp-content/uploads/2016/09/jordan-12-ovo-release-info-1.jpg",
      naam: "Air Jordan 12 OVO (Drake Edition)",
      merk: "Air Jordan",
      prijs: 600,
      beschrijving: "testbescrijving lalalalalal",
    },
    {
      id: 4,
      imageLink:
        "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MjU5NTg0ODM0NDE0NDkz/michael-jordan-flu-game-1jpg.jpg",
      naam: "Air Jordan 12 (Flu Game)",
      merk: "Air Jordan",
      prijs: 700,
      beschrijving: "testbescrijving lalalalalal",
    },
  ]);
  return (
    <div className="Producten">
      {producten.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
};

export default Products;
