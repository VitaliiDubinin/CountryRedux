// const Favorites = () => {
//   console.log();
// };

// export default Favorites;

import React, { useEffect, useState, useContext, useMemo } from "react";
import CountryCard from "./CountryCard";

import SearchGlob from "./Search";

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

// import { loadState, saveState } from "./localStorage";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon",
}))``;

const Countries = () => {
  const dispatch = useDispatch();
  // const countriesList = useSelector((state) => state.countries (!store name!).countries (!reducer name!));
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);
  const Favarray = useSelector((state) => state.favorites.favlist);

  console.log(Favarray.length);

  const favnum = Favarray.length;
  const size = useContext(ResponsiveContext);
  const [user, setUser] = useState(defaultUser);

  const favorgret = "This is Favorite PAGE";

  const [items, setItems] = useState([]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  useEffect(() => {
    dispatch(initCountries());
  }, [dispatch]);

  const searchHandler = (e) => {
    dispatch(search(e.target.value));
  };

  //   const favoriteList = countriesList.map((scount) => Favarray.filter((fav) => fav.item === scount.name.common));

  //   const favoriteList = countriesList.filter((scount) => scount.name.common === "Bulgaria");
  const favs = Favarray.map((fav) => fav.item);
  console.log(favs);

  const favoriteList = countriesList.filter((scount) => favs.includes(scount.name.common));
  //   const favoriteList = countriesList.filter((scount) => Favarray.map((fav) => fav.item === scount.name.common));

  console.log(favoriteList);

  //   const favor = favoriteList.filter((count) => count.length === 1);
  //   console.log(favor);
  //    {countryFilter.map((scount) => (
  //     <CountryCard
  //       key={countryFilter.indexOf(scount)}
  //       data={scount}
  //       favorite={Favarray.find((fav) => fav.item === scount.name.common)}

  const countryFilter = favoriteList.filter((res) => {
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
                  {/* <Greeting favor={favorgret} /> */}
                  <h1>Favorite countires list </h1>

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
// }

export default Countries;
