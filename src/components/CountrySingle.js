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
  // let feelslike = feelslike;

  //

  const [capgeo, setCapgeo] = useState({});
  const [geotoweather, setGeotoweather] = useState({});
  // const [capgeo, setCapgeo] = useState([]);
  const [capweather, setCapweather] = useState([]);
  const [capparam, setCapparam] = useState([]);
  const [feelslike, setFeelslike] = useState([]);
  // const [capname, setCapname] = useState();
  const [loading, setLoading] = useState(false);

  const size = useContext(ResponsiveContext);

  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678")
      .then((response) => {
        setCapgeo(response.data[0]);
        // console.log(response.data[0]);
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
            setGeotoweather(capgeo);
            // console.log(capgeo);
            // console.log(capgeo.name);
            // console.log(geotoweather);
            setCapweather(res.data);
            setCapparam(res.data.main);
            console.log(res.data.main.feels_like);
            // setFeelslike(Math.round(capparam.feels_like));
            setFeelslike(Math.floor(res.data.main.feels_like, 2));
            // let a = capparam.feels_like;
            // setFeelslike(Math.floor(capparam.feels_like));
            // setFeelslike(parseInt(capparam.feels_like));
            // setFeelslike(Number(capparam.feels_like));
            // console.log(feelslike);
            // console.log(a);
            // console.log(res.data);
            // console.log(res.data.main);
            // console.log(res.data.main.temp);
            // console.log(res.data);
            // console.log(capweather);
            // let feelslike = Math.floor(capparam.feels_like);

            let randImage = randApiHead + "views%20of%20" + capgeo.name;

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
              {/* Temp. feels like: <span className="capname">{capparam.feels_like}</span>
              <br /> */}
              Temp. feels like: <span className="capname">{feelslike}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Humidity:<span className="capname">{capparam.humidity}</span>
            </Text>
          </Box>
        </CardBody>
      </Card>
      {/* </Grid> */}
    </Box>
  );
};
export default CountrySingle;
