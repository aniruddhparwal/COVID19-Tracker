import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfoBox from './Components/InfoBox';
import Map from './Components/Map';
import './CSS/style.css';

function App() {

  const [countries, setContries] = useState([]);
  const [country, setCountry] = useState("worldwide")
  const [countryInfo, setCountryInfo] = useState({})

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

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode)
        setCountryInfo(data)
      })
  }

  console.log("Country Info >>", countryInfo)
  return (
    <div className="app">
      <div className="app__left">
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
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recoverd" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide New Cases</h3>
        </CardContent>

      </Card>

    </div>
  );
}

export default App;
