import React from "react";
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
  const location = useLocation();
  const country = location.state?.country;

  if (!country) {
    return <p>No country data available</p>;
  }

  return (
    <div className="details-container">
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Area: {country.area.toLocaleString()} km²</p>
      <p>Timezones: {country.timezones.join(", ")}</p>
      <p>Languages: {Object.values(country.languages || {}).join(", ")}</p>
      <p>Currencies: {Object.values(country.currencies || {}).map((curr) => curr.name).join(", ")}</p>
      <p>Maps: <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Maps</a></p>
    </div>
  );
};

export default CountryDetails;
