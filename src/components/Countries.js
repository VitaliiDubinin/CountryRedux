import React, { useEffect, useState, useContext, useMemo } from "react";
import CountryCard from "./CountryCard";
// import axios from "axios";
import { Grid, WorldMap, TextInput, Box, Button, ResponsiveContext, Text } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import styled from "styled-components";
import { defaultUser } from "./grom/UserContext";
import { GlobalHeader } from "./grom/GlobalHeader";
import { UserContext } from "./grom/UserContext";
import { Greeting } from "./grom/Greeting";
import { DemoPageContent } from "./grom/DemoPageContent";

import { useDispatch, useSelector } from "react-redux";
import { initCountries, search } from "../features/countries/countriesSlice";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon",
}))``;

const Countries = () => {
  const dispatch = useDispatch();
  // const countriesList = useSelector((state) => state.countries (!store name!).countries (!reducer name!));
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  // const [country, setCountry] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");

  // export const initializeCountries=()=>{
  //   return async (dispatch)=>{
  //     const countries=await
  //   }
  // }

  const size = useContext(ResponsiveContext);
  const [user, setUser] = useState(defaultUser);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  // const getCountry = () => axios.get("https://restcountries.com/v3.1/all");

  // useEffect(() => {
  //   setLoading(true);
  //   Promise.all([getCountry()]).then(function (results) {
  //     const countriesData = results[0];
  //     setCountry(countriesData.data);
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(initCountries());
  }, [dispatch]);

  const searchHandler = (e) => {
    // console.log(e.target.value);
    // setSearch(e.target.value);
    dispatch(search(e.target.value));
  };

  // const countryFilter = country.filter((res) => {
  const countryFilter = countriesList.filter((res) => {
    // return res.name.common.toLowerCase().includes(search.toLowerCase());
    return res.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

  if (loading) {
    // if (isLoading) {
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
                    continents={[
                      {
                        name: "Africa",

                        color: "neutral-4",
                        onClick: (name) => {},
                      },
                    ]}
                    onSelectPlace={(lat, lon) => {}}
                    places={[
                      {
                        name: "Helsinki",
                        location: [60.1718, 24.9414],
                        color: "accent-3",
                        onClick: (name) => {},
                      },
                    ]}
                    selectColor="accent-2"
                  />

                  <Box background="background-contrast" round="xsmall" width="medium" alignSelf="center">
                    <StyledTextInput
                      icon={<SearchIcon id="search-icon" color="placeholder" />}
                      placeholder="Search"
                      // plain
                      reverse
                      // value={search}
                      value={searchInput}
                      onChange={searchHandler}
                      // onchange={(e) => dispatch(search(e.target.value))}
                      type="search"
                    />
                  </Box>

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
