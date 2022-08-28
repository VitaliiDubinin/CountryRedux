import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Box, Card, CardBody, Image, Text, Grid, ResponsiveContext } from "grommet";
// import Weatherwindow from "./Weatherwindow";
// import vidjet from "./vidjet";
// const apiHead = "https://source.unsplash.com/";
// const randApiHead = "https://source.unsplash.com/random/500x400/?";
const randApiHead = "https://source.unsplash.com/500x400/?";
// const randApiHead = "https://www.pexels.com/search/";
// const randApiHead = "https://pixabay.com/photos/sun-has-flower-echinacea-daisy-7391959/";
const count_words = (word_array) => {
  let total = 0;
  word_array.forEach(() => {
    total++;
  });
  return total;
};

const CountrySingle = () => {
  let randImage = randApiHead;
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

  const size = useContext(ResponsiveContext);

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
            console.log(capgeo.name);
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
            console.log(res.data);
            console.log(capweather);
            // let randImage = randApiHead;
            // if (count_words(res.data.name.split()) > 1) {
            //   const name_array = res.data.name.split();
            //   console.log(count_words(name_array));
            //   const total_words = count_words(name_array);
            //   const noun = name_array[total_words - 1];
            //   randImage += noun;
            //   console.log(randImage);
            // } else {
            //   randImage += res.data.name;
            //   console.log(randImage);
            // }
            // let randImage = randApiHead + res.data.name + "_views";
            // let randImage = randApiHead + "one day in" + res.data.name;
            // let randImage = randApiHead + "season trip to" + res.data.name;
            // let randImage = randApiHead + "weather in" + res.data.name;
            // let randImage = randApiHead + "trip%20to%20" + capgeo.name + "%20street";
            // let randImage = randApiHead + "season%20trip%20to%20" + capgeo.name;
            let randImage = randApiHead + "views%20of%20" + capgeo.name;
            // let randImage = randApiHead + capgeo.name + "%20from%20helicopter";
            console.log(randImage);
          });
      });
  }, []);

  return (
    <Box
      background="background"
      justify="center"
      align="center"
      pad={{
        // horizontal: !["xsmall", "small"].includes(size) ? "xlarge" : "medium",
        // horizontal: "xlarge",
        vertical: "xlarge",
      }}
      flex={false}
    >
      {/* <Grid columns={!["xsmall", "small"].includes(size) ? "medium" : "100%"} rows={[["auto", "full"]]} gap="medium"> */}
      <Card background="background-front" width="medium">
        <Box height="small" width="medium">
          <Image className="flagsq" src={randImage} alt={country.name.common} fit="cover" />
        </Box>
        <CardBody gap="small">
          <Box gap="medium">
            {" "}
            <Text color="text-strong" size="xxlarge" weight="bold">
              Weather in <span className="capname">{country.capital}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Temperature: <span className="capname">{capparam.temp}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Temp. feels like: <span className="capname">{capparam.feels_like}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Humidity:<span className="capname">{capparam.humidity}</span>
            </Text>
          </Box>
        </CardBody>
        {/* <h1>{country.name.common}</h1> */}
        {/* <p className="capital">
        Weather in <span className="capname">{country.capital}</span>
      </p> */}
        {/* <h1>{country.cca2}</h1> */}
        {/* <h1>{capgeo.lat}</h1> */}
        {/* <h1>{capgeo.lon}</h1> */}
        {/* <h1>{capweather.name}</h1> */}
        {/* <h1>{capweather.visibility}</h1> */}
        {/* <Weatherwindow key={capweather.id} data={capweather} {...capweather}></Weatherwindow> */}
        {/* <Weatherwindow key={capweather.id} data={capweather}></Weatherwindow> */}
        {/* <h1>{...capweather}</h1> */}
        {/* <p className="languages">
        Temperature: <span className="capname">{capparam.temp}</span>
      </p> */}
        {/* <p className="languages">
        Temp. feels like: <span className="capname">{capparam.feels_like}</span>
      </p> */}
        {/* <p className="languages">
        Humidity: <span className="capname">{capparam.humidity}</span>
      </p> */}
        {/* <h1>{capweather.main.temp}</h1>
      <h1>{capweather.main.feels_like}</h1>
      <h1>{capweather.main.humidity}</h1> */}
        {/* <img className="flagsq" src={country.flags.png} alt={country.name.common} /> */}
        {/* <img className="flagsq" src={randImage} alt={country.name.common} /> */}
        {/* <div id="openweathermap-widget-15">weather window</div> */}
        {/* <script async="" charset="utf-8" src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"></script>
      <script src="widjet.js" type="text/javascript"></script> */}
      </Card>
      {/* </Grid> */}
    </Box>
  );
};
export default CountrySingle;
