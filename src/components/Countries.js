import React, { useEffect, useState, useContext, useMemo } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { Grid, WorldMap, TextInput, Box, Button, ResponsiveContext, Text } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import styled from "styled-components";
import { defaultUser } from "./grom/UserContext";
import { GlobalHeader } from "./grom/GlobalHeader";
import { UserContext } from "./grom/UserContext";
import { Greeting } from "./grom/Greeting";
import { DemoPageContent } from "./grom/DemoPageContent";
// import "bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon",
}))``;

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const size = useContext(ResponsiveContext);
  const [user, setUser] = useState(defaultUser);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  // const getRecipes = () => axios.get("http://localhost:3010/recipes");
  // const getRecipes = () => axios.get("https://my-json-server.typicode.com/vitaliidubinin/jsonforrecipeapp/recipes");
  // const getRecipes = () => axios.get("https://tasteofdream.herokuapp.com/api/recipes");
  const getCountry = () => axios.get("https://restcountries.com/v3.1/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getCountry()]).then(function (results) {
      // const recipesData = results[0];
      const countriesData = results[0];
      // console.log(countriesData);
      // console.log(countriesData.data);

      setCountry(countriesData.data);
      // console.log(countriesData.data.indexOf());
      // console.log(country);
      setLoading(false);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const countryFilter = country.filter((res) => {
    return res.name.common.toLowerCase().includes(search.toLowerCase());
  });

  // const countryFilter = country;

  if (loading) {
    return <p>Loading....</p>;
  } else {
    return (
      <UserContext.Provider value={contextValue}>
        <Box width={{ max: "xxlarge" }} margin="auto" fill>
          <GlobalHeader />
          <Box overflow="auto">
            <Box
              background="background"
              justify="center"
              pad={{
                horizontal: !["xsmall", "small"].includes(size) ? "xlarge" : "medium",
                vertical: "large",
              }}
              flex={false}
            >
              {user ? (
                <Box gap="large">
                  <Greeting />
                  <WorldMap
                    alignSelf="center"
                    color="neutral-4"
                    // justify="center"
                    continents={[
                      {
                        name: "Africa",
                        // color: "light-3",
                        color: "neutral-4",
                        onClick: (name) => {},
                      },
                    ]}
                    onSelectPlace={(lat, lon) => {}}
                    places={[
                      {
                        // name: "Sydney",
                        // location: [-33.8830555556, 151.216666667],
                        name: "Helsinki",
                        location: [60.1718, 24.9414],
                        color: "accent-3",
                        onClick: (name) => {},
                      },
                    ]}
                    selectColor="accent-2"
                  />
                  {/* <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
        </div> */}

                  <Box background="background-contrast" round="xsmall" width="medium" alignSelf="center">
                    <StyledTextInput
                      icon={<SearchIcon id="search-icon" color="placeholder" />}
                      placeholder="Search"
                      // plain
                      reverse
                      value={search}
                      onChange={searchHandler}
                      type="search"
                    />
                  </Box>

                  {/* <Grid columns="medium" gap="small">
          {countryFilter.map((scount) => (
            <CountryCard key={countryFilter.indexOf(scount)} data={scount} {...scount} />
          ))}
        </Grid> */}

                  <Grid columns={!["xsmall", "small"].includes(size) ? "medium" : "100%"} rows={[["auto", "full"]]} gap="medium" fill>
                    {countryFilter.map((scount) => (
                      <CountryCard key={countryFilter.indexOf(scount)} data={scount} {...scount} />
                    ))}
                  </Grid>
                </Box>
              ) : (
                <DemoPageContent />
              )}
            </Box>
          </Box>
        </Box>
      </UserContext.Provider>
    );
  }
};
// }

export default Countries;
