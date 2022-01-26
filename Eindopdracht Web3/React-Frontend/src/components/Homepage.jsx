import React from "react";
import "./Css/Homepage.css";
import FooterComponent from "./FooterComponent";

const Homepage = () => {
  return (
    <div className="HomePage">
      <div className="WelcomeText">
        <h1 className="HomepageWelcometext">Welcome to the sneaker store</h1>
        <h3 className="HomepageSugestionText">Have a look around</h3>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Homepage;
