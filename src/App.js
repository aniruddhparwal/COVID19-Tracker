import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfoBox from './Components/InfoBox';
import Table from './Components/Table'
import Map from './Components/Map';
import './CSS/style.css';
import { prettyPrintStat, sortData } from './util';
import LineGraph from './Components/LineGraph';
import "leaflet/dist/leaflet.css"

function App() {

  const [countries, setContries] = useState([]);
  const [country, setCountry] = useState("worldwide")
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState("cases")

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
          const sortedData = sortData(data)
          setTableData(sortedData)
          setMapCountries(data);
          setContries(countries)
        })
    }
    getCountriesData()
  }, [])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data)
      });
  }, [])


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode)
        setCountryInfo(data)
        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4)
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
          <InfoBox onClick={e => setCaseType('cases')} title="Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} />
          <InfoBox onClick={e => setCaseType('recovered')} title="Recoverd" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} />
          <InfoBox onClick={e => setCaseType('deaths')} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)} />
        </div>
        <Map
          casesType={caseType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide New {caseType}</h3>
          <LineGraph casesType={caseType} />
        </CardContent>

      </Card>

    </div >
  );
}

export default App;
