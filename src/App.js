import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './CSS/style.css';

function App() {

  const [countries, setContries] = useState([]);
  const [country, setCountry] = useState("worldwide")

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }
          ));
          setContries(countries)
        })
    }
    getCountriesData()
  }, [])

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID19-TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => { return (<MenuItem value={country.value}>{country.name}</MenuItem>) })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
