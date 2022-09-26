import React, { useEffect, useState, useContext, useMemo } from "react";
import CountryCard from "./CountryCard";

import SearchGlob from "./Search";

import { Grid, WorldMap, TextInput, Box, Button, ResponsiveContext, Text } from "grommet";

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
  // let Favarray = [
  //   {
  //     id: "2022-09-17T17:17:44.240Z",
  //     item: "Guadeloupe",
  //     favorite: "true",
  //   },
  //   {
  //     id: "2022-09-17T17:17:47.599Z",
  //     item: "Mali",
  //     favorite: "true",
  //   },
  //   {
  //     id: "2022-09-17T17:17:51.447Z",
  //     item: "Saint Helena, Ascension and Tristan da Cunha",
  //     favorite: "true",
  //   },
  //   {
  //     id: "2022-09-17T17:19:47Z",
  //     item: "Finland",
  //     favorite: "true",
  //   },
  //   {
  //     id: "2022-09-17T17:18:47Z",
  //     item: "Bulgaria",
  //     favorite: "",
  //   },
  // ];

  const dispatch = useDispatch();

  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);
  const Favarray = useSelector((state) => state.favorites.favlist);

  // const favnum = Favarray.length;
  const size = useContext(ResponsiveContext);
  const [user, setUser] = useState(defaultUser);

  const [items, setItems] = useState([]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("persist:root")).favorites;

    if (items) {
      setItems(items);
    }
    dispatch(initCountries());
  }, [dispatch]);

  const searchHandler = (e) => {
    dispatch(search(e.target.value));
  };

  const countryFilter = countriesList.filter((res) => {
    return res.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

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

                  <SearchGlob />

                  <Grid columns={!["xsmall", "small"].includes(size) ? "medium" : "100%"} rows={[["auto", "full"]]} gap="medium" fill>
                    {countryFilter.map((scount) => (
                      <CountryCard
                        key={countryFilter.indexOf(scount)}
                        data={scount}
                        favorite={Favarray.find((fav) => fav.item === scount.name.common)}
                        {...scount}
                        {...Favarray}
                      />
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

export default Countries;
