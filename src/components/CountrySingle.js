import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Card, CardBody, Image, Text } from "grommet";

import { Box, Grid, Heading, Main, ResponsiveContext, Page, PageContent, PageHeader } from "grommet";
import { AppContainer } from "../components/dashboard/AppContainer";
import { ContentArea } from "../components/dashboard/ContentArea";
import { FirmwareBaselines } from "../components/dashboard/FirmwareBaselines";
import { FirmwareStatus } from "../components/dashboard/FirmwareStatus";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { ServerAttention } from "../components/dashboard/ServerAttention";

import { UpdatesAvaliable } from "../components/dashboard/UpdatesAvaliable";

const randApiHead = "https://picsum.photos/500/400";

const count_words = (word_array) => {
  let total = 0;
  word_array.forEach(() => {
    total++;
  });
  return total;
};

const CountrySingle = () => (
  <AppContainer background="background-back">
    <ContentArea title="Global Header" />
    <Page>
      <PageContent gap="large">
        <PageHeader title="Country Dashboard" />
        <Content />
      </PageContent>
    </Page>
    <ContentArea title="Global Footer" />
  </AppContainer>
);

export default CountrySingle;

const parentGrid = {
  columns: {
    xsmall: "100%",
    small: "100%",
    medium: ["auto", ["small", "medium"]],
    large: ["auto", ["small", "medium"]],
    xlarge: ["auto", "medium"],
  },
  gap: {
    xsmall: "large",
    small: "large",
    medium: "medium",
    large: "large",
    xlarge: "large",
  },
};

const firstChildGrid = {
  columns: {
    xsmall: "100%",
    small: "100%",
    medium: "100%",
    large: [
      ["medium", "auto"],
      ["small", "medium"],
    ],
    xlarge: ["auto", ["small", "medium"]],
  },
  gap: "medium",
};

const secondChildGrid = {
  columns: {
    xsmall: ["100%"],
    small: ["100%"],
    medium: ["100%"],
    large: [["auto", "auto"]],
    xlarge: [["auto", "auto"]],
  },
  rows: ["auto"],
  areas: {
    xsmall: [["firmwareStatus"], ["firmwareUpdates"], ["firmwareBaselines"]],
    small: [["firmwareStatus"], ["firmwareUpdates"], ["firmwareBaselines"]],
    medium: [["firmwareStatus"], ["firmwareUpdates"], ["firmwareBaselines"]],
    large: [
      ["firmwareStatus", "firmwareUpdates"],
      ["firmwareBaselines", "firmwareBaselines"],
    ],
    xlarge: [
      ["firmwareStatus", "firmwareBaselines"],
      ["firmwareUpdates", "firmwareBaselines"],
    ],
  },
  gap: "medium",
};

const Content = () => {
  let randImage = randApiHead;
  const location = useLocation();
  const country = location.state.data;
  // console.log(country);

  const [capgeo, setCapgeo] = useState({});
  const [geotoweather, setGeotoweather] = useState({});

  const [capweather, setCapweather] = useState([]);
  const [capparam, setCapparam] = useState([]);
  const [feelslike, setFeelslike] = useState([]);

  const [loading, setLoading] = useState(false);

  const size = useContext(ResponsiveContext);

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
    <Main>
      <Grid columns={parentGrid.columns[size]} gap={parentGrid.gap[size]}>
        {["xsmall", "small"].includes(size) && <RecentActivity />}
        <Box gap="large">
          <Box gap="small">
            <Heading level={2} size="small" margin="none">
              Weather in {country.capital}
            </Heading>
            <Grid columns={firstChildGrid.columns[size]} gap={firstChildGrid.gap}>
              <Card background="background-front" width="medium">
                <Box height="small" width="medium">
                  <Image className="flagsq" src={randImage} alt={country.name.common} fit="cover" />
                </Box>
                <CardBody gap="small">
                  <Box gap="medium">
                    {" "}
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

              <ServerAttention background="background-front" />
            </Grid>
          </Box>
          <Box gap="small">
            <Heading level={2} size="small" margin="none">
              Firmware
            </Heading>
            <Grid columns={secondChildGrid.columns[size]} rows={secondChildGrid.rows} areas={secondChildGrid.areas[size]} gap={secondChildGrid.gap}>
              <FirmwareStatus background="background-front" gridArea="firmwareStatus" />
              <FirmwareBaselines background="background-front" gridArea="firmwareBaselines" />
              <UpdatesAvaliable background="background-front" gridArea="firmwareUpdates" />
            </Grid>
          </Box>
        </Box>

        <Card background="background-front" width="medium">
          <Heading level={2} size="small" margin="none">
            {/* Political */}
          </Heading>
          <Box height="small" width="medium">
            <Image className="flagsq" src={country.flags.png} alt={country.flag} fit="cover" />
          </Box>
          <CardBody gap="small">
            <Box gap="medium">
              {" "}
              <Text color="text-strong" size="2rem" height="3rem">
                {" "}
                Capital: <span className="capname">{country.capital}</span>
              </Text>
              <Text color="text-strong" size="2rem" height="3rem">
                {" "}
                Timezone: <span className="capname">{country.timezones[0]}</span>
              </Text>
              <Text color="text-strong" size="2rem" height="3rem">
                {" "}
                Subregion:<span className="capname">{country.subregion}</span>
              </Text>
            </Box>
          </CardBody>
        </Card>
      </Grid>
    </Main>
  );
};
