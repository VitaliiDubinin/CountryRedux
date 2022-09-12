import React, { useEffect, useState, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initCountries, search } from "../features/countries/countriesSlice";
import { Grid, WorldMap, TextInput, Box, Button, ResponsiveContext, Text } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import styled from "styled-components";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon",
}))``;

const SearchGlob = () => {
  const searchInput = useSelector((state) => state.countries.search);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    // console.log(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <Box background="background-contrast" round="xsmall" width="medium" alignSelf="center">
      <StyledTextInput
        icon={<SearchIcon id="search-icon" color="placeholder" />}
        placeholder="Search"
        // plain
        reverse
        value={searchInput}
        onChange={searchHandler}
        // onchange={(e) => dispatch(search(e.target.value))}
        type="search"
      />
    </Box>
  );
};

export default SearchGlob;
