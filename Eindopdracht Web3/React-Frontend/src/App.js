import "./index.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Products from "./components/Producten";
import WinkelMand from "./components/WinkelMand";
import Aboutpage from "./components/Aboutpage";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
