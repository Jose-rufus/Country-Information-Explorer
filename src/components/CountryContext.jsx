import React, { createContext, useState, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedPopulation, setSelectedPopulation] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const updateSearchItem = (item) => setSearchItem(item);
  const updateSelectedLanguage = (language) => setSelectedLanguage(language);
  const updateSelectedContinent = (continent) => setSelectedContinent(continent);
  const updateSelectedPopulation = (population) => setSelectedPopulation(population);

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        searchItem,
        updateSearchItem,
        selectedLanguage,
        updateSelectedLanguage,
        selectedContinent,
        updateSelectedContinent,
        selectedPopulation,
        updateSelectedPopulation,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
