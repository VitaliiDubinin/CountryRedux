import React, { useEffect, useState } from "react";
import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Weatherwindow from "./Weatherwindow";
// import vidjet from "./vidjet";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state.data;

  //

  const [capgeo, setCapgeo] = useState({});
  const [geotoweather, setGeotoweather] = useState({});
  // const [capgeo, setCapgeo] = useState([]);
  const [capweather, setCapweather] = useState([]);
  const [capparam, setCapparam] = useState([]);
  // const [capname, setCapname] = useState();
  const [loading, setLoading] = useState(false);

  // setCapname(country.capital);
  // console.log(capname);
  // console.log(country.capital);
  // const capname = country.capital;
  // console.log(capname);
  // const capname = country.capital;
  // const getCapgeo = () =>
  //   axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678");

  // const getCapweather = () =>
  //   axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + capgeo.lat + "&" + capgeo.lon + "&appid=7ba6687b19a6e5271e98d0f410014678");

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  // useEffect(() => {
  //   setLoading(true);
  //   Promise.all([getCapgeo()]).then(function (results) {
  //     const capgeoData = results[0];
  //     setCapgeo(capgeoData.data[0]);
  //     setLoading(false);
  //   });
  // }, []);

  // likes work
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678")
  //     .then((results) => {
  //       setCapgeo(results.data[0]);
  //       console.log(capgeo);
  //       console.log(capgeo.lat, capgeo.lon);

  //       setLoading(false);
  //     });
  //   console.log(capgeo.lat, capgeo.lon);
  //   axios

  //     .get("https://api.openweathermap.org/data/2.5/weather?lat=" + capgeo.lat + "&lon=" + capgeo.lon + "&appid=7ba6687b19a6e5271e98d0f410014678")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       const capweatherData = res;
  //       setCapweather(capweatherData.data);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678")
      .then((response) => {
        setCapgeo(response.data[0]);
        console.log(response.data[0]);
        // console.log(capgeo.lat);
        return response.data[0];
        // return capgeo;
      })
      // .then(console.log(capgeo))
      .then(async (capgeo) => {
        await axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              capgeo.lat +
              "&lon=" +
              capgeo.lon +
              "&appid=7ba6687b19a6e5271e98d0f410014678&units=metric"
          )
          .then((res) => {
            // setCapweather(capgeo);
            setGeotoweather(capgeo);
            console.log(capgeo);
            console.log(geotoweather);
            setCapweather(res.data);
            setCapparam(res.data.main);
            console.log(res.data);
            console.log(res.data.main);
            console.log(res.data.main.temp);
            // console.log({ ...capweather });
            // setCapweather(res.data);
            // return capweather;
            // return res.data;
            // console.log(res.data);
            // console.log(capweather);
          });
      });
  }, []);

  return (
    <div className="singlecard">
      <h1>{country.name.common}</h1>
      <h1>{country.capital}</h1>
      <h1>{country.cca2}</h1>
      <h1>{capgeo.lat}</h1>
      <h1>{capgeo.lon}</h1>
      <h1>{capweather.name}</h1>
      <h1>{capweather.visibility}</h1>
      {/* <Weatherwindow key={capweather.id} data={capweather} {...capweather}></Weatherwindow> */}
      {/* <Weatherwindow key={capweather.id} data={capweather}></Weatherwindow> */}
      {/* <h1>{...capweather}</h1> */}
      <h1>{capparam.temp}</h1>
      <h1>{capparam.feels_like}</h1>
      <h1>{capparam.humidity}</h1>
      {/* <h1>{capweather.main.temp}</h1>
      <h1>{capweather.main.feels_like}</h1>
      <h1>{capweather.main.humidity}</h1> */}
      <img className="flagsq" src={country.flags.png} alt={country.name.common} />
      {/* <div id="openweathermap-widget-15">weather window</div> */}
      {/* <script async="" charset="utf-8" src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"></script>
      <script src="widjet.js" type="text/javascript"></script> */}
    </div>
  );
};
export default CountrySingle;
