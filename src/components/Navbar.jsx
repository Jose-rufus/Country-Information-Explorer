import React, { useContext } from "react";
import { CountryContext } from "./CountryContext";

const Navbar = () => {
  const {
    updateSearchItem,
    countries,
    updateSelectedLanguage,
    updateSelectedContinent,
    updateSelectedPopulation,
  } = useContext(CountryContext);

  const continents = ["Asia", "Africa", "Americas", "Europe", "Oceania"];
  const languages = Array.from(
    new Set(
      countries.flatMap((country) => Object.values(country.languages || {}))
    )
  );
  const populations = [
    "Less than 1M",
    "1M - 10M",
    "10M - 50M",
    "50M - 100M",
    "More than 100M",
  ];

  const handleContinentChange = (e) => {
    updateSelectedContinent(e.target.value);
  };

  const handleLanguageChange = (e) => {
    updateSelectedLanguage(e.target.value);
  };

  const handlePopulationChange = (e) => {
    updateSelectedPopulation(e.target.value);
  };

  return (
    <div className="navbar">
      <select onChange={handleContinentChange}>
        <option value="">Select Continent</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>

      <select onChange={handleLanguageChange}>
        <option value="">Select Language</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>

      <select onChange={handlePopulationChange}>
        <option value="">Select Population</option>
        {populations.map((population, index) => (
          <option key={index} value={population}>
            {population}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search country..."
        onChange={(e) => updateSearchItem(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
