import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountryContext } from "./CountryContext";
import "../App.css"; // Make sure to import your CSS

const Data = () => {
  const {
    countries,
    loading,
    searchItem,
    selectedLanguage,
    selectedContinent,
    selectedPopulation,
  } = useContext(CountryContext);

  const navigate = useNavigate();

  if (loading) {
    return <p>LOADING...</p>;
  }

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    const matchesLanguage = selectedLanguage
      ? Object.values(country.languages || {}).includes(selectedLanguage)
      : true;
    const matchesContinent = selectedContinent
      ? country.region === selectedContinent
      : true;

    let matchesPopulation = true;
    if (selectedPopulation) {
      if (selectedPopulation === "Less than 1M") {
        matchesPopulation = country.population < 1000000;
      } else if (selectedPopulation === "1M - 10M") {
        matchesPopulation =
          country.population >= 1000000 && country.population <= 10000000;
      } else if (selectedPopulation === "10M - 50M") {
        matchesPopulation =
          country.population > 10000000 && country.population <= 50000000;
      } else if (selectedPopulation === "50M - 100M") {
        matchesPopulation =
          country.population > 50000000 && country.population <= 100000000;
      } else if (selectedPopulation === "More than 100M") {
        matchesPopulation = country.population > 100000000;
      }
    }

    return (
      matchesSearch && matchesLanguage && matchesContinent && matchesPopulation
    );
  });

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", fontFamily: "timesroman" }}>
        Country Data
      </h1>
      <div className="box">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div key={index} className="item">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                style={{ width: "50px", height: "auto" }}
              />
              <p>
                Country:<strong>{country.name.common}</strong>
              </p>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <button
                className="getbtn"
                onClick={() =>
                  navigate("/country-details", { state: { country } })
                }
              >
                Get Details
              </button>
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Data;
