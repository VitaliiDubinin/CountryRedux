import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Box, Card, CardBody, Image, Text } from "grommet";

// import { Box, ResponsiveContext } from "grommet";

// const CountriesSingle = () => {
//   const location = useLocation();
//   const country = location.state.country;
//   return <div>Single</div>;
//   return <div>Single</div>;
// };

// export default CountriesSingle;

// {
//   /* <Button onClick={()=>Navigate('/countries')}/> */
// }

const randApiHead = "https://picsum.photos/500/400";

const count_words = (word_array) => {
  let total = 0;
  word_array.forEach(() => {
    total++;
  });
  return total;
};

const CountriesSingle = () => {
  // const CountrySingle = () => {
  let randImage = randApiHead;
  const location = useLocation();
  const country = location.state.data;

  const [capgeo, setCapgeo] = useState({});
  const [geotoweather, setGeotoweather] = useState({});

  const [capweather, setCapweather] = useState([]);
  const [capparam, setCapparam] = useState([]);
  const [feelslike, setFeelslike] = useState([]);

  // const [loading, setLoading] = useState(false);

  // const size = useContext(ResponsiveContext);

  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct?q=" + country.capital + "&limit=1&appid=7ba6687b19a6e5271e98d0f410014678")
      .then((response) => {
        setCapgeo(response.data[0]);
        return response.data[0];
      })

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
            setCapweather(res.data);
            setCapparam(res.data.main);
            // console.log(res.data.main.feels_like);
            setFeelslike(Math.floor(res.data.main.feels_like, 2));
            let randImage = randApiHead;

            // console.log(randImage);
          });
      });
  }, []);

  return (
    <Box
      background="background"
      justify="center"
      align="center"
      pad={{
        vertical: "xlarge",
      }}
      flex={false}
    >
      <Card background="background-front" width="medium">
        <Box height="small" width="medium">
          <Image className="flagsq" src={randImage} alt={country.name.common} fit="center" />
        </Box>
        <CardBody gap="small">
          <Box gap="medium">
            {" "}
            <Text color="text-strong" size="xxlarge" weight="bold">
              Weather in <span className="capname">{country.capital}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Favorite: <span className="capname">F</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Temperature: <span className="capname">{capparam.temp}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Temp. feels like: <span className="capname">{feelslike}</span>
            </Text>
            <Text color="text-strong" size="2rem" height="3rem">
              {" "}
              Humidity:<span className="capname">{capparam.humidity}</span>
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
export default CountriesSingle;
