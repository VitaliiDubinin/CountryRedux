import React, { useEffect, useState } from "react";
import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state.data;

  //

  const [capgeo, setCapgeo] = useState([]);
  const [capweather, setCapweather] = useState([]);
  // const [capname, setCapname] = useState();
  const [loading, setLoading] = useState(false);

  // setCapname(country.capital);
  // console.log(capname);
  // console.log(country.capital);
  // const capname = country.capital;
  // console.log(capname);
  // const capname = country.capital;
  const getCapgeo = () =>
    axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678");

  const getCapweather = () =>
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + capgeo.lat + "&" + capgeo.lon + "&appid=7ba6687b19a6e5271e98d0f410014678");

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    setLoading(true);
    Promise.all([getCapgeo()]).then(function (results) {
      // const recipesData = results[0];
      const capgeoData = results[0];
      // console.log(capgeoData);
      // console.log(countriesData.data);

      setCapgeo(capgeoData.data[0]);
      // console.log(countriesData.data.indexOf());
      // console.log(capgeoData.data[0].lon);
      // console.log(capgeoData.data[0].lat);
      setLoading(false);
    });
  }, []);

  return (
    <div className="singlecard">
      <h1>{country.name.common}</h1>
      <h1>{country.capital}</h1>
      <h1>{country.cca2}</h1>
      <h1>{capgeo.lat}</h1>
      <h1>{capgeo.lon}</h1>

      <img className="flagsq" src={country.flags.png} alt={country.name.common} />
      {/* <div id="openweathermap-widget-15"></div> */}
    </div>
  );
};
export default CountrySingle;
