import React from "react";
import "./Css/FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="FooterComponent">
      <div className="ContactInfo">
        <p className="contactInfoTitle">Cotnact Info</p>
        <p className="TelefoonNummer">0495568566</p>
        <p className="email">ShoeStore@bs.com</p>
        <p className="summary">
          &copy;{new Date().getFullYear()} SHOE STORE | All rights reserved |
          Terms of Service | Privacy
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
