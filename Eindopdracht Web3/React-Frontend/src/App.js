import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Products from "./components/Producten";
import WinkelMand from "./components/WinkelMand";
import Aboutpage from "./components/Aboutpage";
import Footer from "./components/FooterComponent";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/producten" element={<Products />} />
          <Route exact path="/winkelmand" element={<WinkelMand />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
