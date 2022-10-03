import React from "react";
// import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import { Box, ThemeContext, grommet, Card, CardHeader, CardBody, CardFooter, Button, Text } from "grommet";
import { Card, CardHeader, CardBody, CardFooter, Button, Text } from "grommet";
// import { Favorite, ShareOption, base, Apple, Filter } from "grommet-icons";
import { Favorite, ShareOption } from "grommet-icons";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorites } from "../features/countries/cartSlice";
// import styled, { css, ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";
// import { deepMerge } from "grommet-icons/utils";

const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data, favorite }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

  const arr = { ...favorite };

  const dispatch = useDispatch();
  const addFav = (e) => {
    dispatch(addFavorites(e));
  };

  const filledIcon = css`
    path[fill="none"] {
      fill: rgb(229 36 59) !important;
    }
  `;

  const FavoriteFilled = styled(Favorite)`
    ${(props) => (props.favorite ? filledIcon : "")}
  `;

  return (
    <Card direction="column" height="24rem" width="30rem" background="light-5" border={{ color: "brand", size: "small" }} gap="xsmall">
      <CardHeader pad="1px">
        <Text size="2rem">
          {" "}
          <span>
            {name.common}
            <br></br>
          </span>
          <span>{name.official}</span>
        </Text>
        <Text size="6rem"> {flag}</Text>
      </CardHeader>

      <CardBody pad="medium">
        <span>Capital: {capital}</span>
        <span>
          LANGUAGE(S):
          {Object.values(languages || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value}</span>
          ))}
        </span>
        <span>POPULATION: {contpop}</span>
        <span>
          CURRENCIE(S):
          {Object.values(currencies || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value.name + " (" + value.symbol + ")"}</span>
          ))}
        </span>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<FavoriteFilled color="red" favorite={arr.favorite} onClick={() => addFav(name.common)} />} hoverIndicator />

        <Link to={name.common} state={{ data: data }}>
          See more
        </Link>
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
