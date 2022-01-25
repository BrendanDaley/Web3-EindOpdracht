import React from "react";
import "./Css/Aboutpage.css";

const Aboutpage = () => {
  return (
    <div className="AboutPage">
      <h1>About Us</h1>
      <p className="summary">
        We offer the most expensive sneakers in the world, if you want to
        contact us use any of the means listed below.
      </p>
      <div className="ContactInfo">
        <h3 className="contactInfoTitle">Cotnact Info</h3>
        <p className="TelefoonNummer">0495568566</p>
        <p className="email">ShoeStore@bs.com</p>
        <p className="Adres">Bs-Street 69 London UK</p>
      </div>
    </div>
  );
};

export default Aboutpage;
