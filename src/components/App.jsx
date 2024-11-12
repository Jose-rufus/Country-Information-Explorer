import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./CountryContext";
import Navbar from "./Navbar";
import Data from "./Data";
import CountryDetails from "./CountryDetails";
import "../App.css";
import Foot from "./Foot";

const App = () => {
  return (
    <CountryProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/country-details" element={<CountryDetails />} />
        </Routes>
      </Router>
      <Foot />
    </CountryProvider>
  );
};

export default App;
