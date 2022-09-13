import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, ThemeContext, grommet, Card, CardHeader, CardBody, CardFooter, Button, Text } from "grommet";
import { Favorite, ShareOption, base, Apple, Filter } from "grommet-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites } from "../features/countries/cartSlice";
import styled, { css, ThemeProvider } from "styled-components";
import { deepMerge } from "grommet-icons/utils";

// const customColorTheme = deepMerge(base, {
//   icon: {
//     extend: css`
//       ${(props) =>
//         props.color === "blue" &&
//         `
//       fill: "dark-1";
//     `}
//     `,
//   },
// });

const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

  const dispatch = useDispatch();
  const addFav = (e) => {
    // console.log("FavAdded");
    // console.log(e);
    dispatch(addFavorites(e));
  };

  const filledIcon = css`
    path[fill="none"] {
      fill: rgb(229 6 59) !important;
    }
    polygon[fill="none"] {
      fill: rgb(229 36 59) !important;
    }
  `;

  const FavoriteFilled = styled(Favorite)`
    ${(props) => (props.favorite ? filledIcon : "")}
  `;

  const FilterFilled = styled(Filter)`
    ${(props) => (props.filled ? filledIcon : "")}
  `;

  // const filledIcon = css`
  //   path[fill="none"] {
  //     fill: ${(props) => props.theme.colors["dark-4"]};
  //   }
  // `;

  // const CardFavorite = styled(Favorite)`
  //   ${(props) => (props.checked ? filledIcon : "")}
  // `;

  // const dispatch = useDispatch();
  return (
    // <div className="card">
    <Card direction="column" height="24rem" width="30rem" background="light-5" border={{ color: "brand", size: "small" }} gap="xsmall">
      {/* <LinkContainer to={`/countries/${country.name.common}`} state={{ country: country }}> */}
      {/* <CardHeader alignContent="start" alignSelf="end" pad="1px"> */}
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
        {/* <Button icon={<Favorite color="red" />} hoverIndicator /> */}
        <Button icon={<FavoriteFilled color="red" favorite="true" onClick={() => addFav(name.common)} />} hoverIndicator />
        {/* <Button> */}
        {/* <Box> */}
        {/* <ThemeProvider theme={customColorTheme}> */}
        {/* <FavoriteFilled color="violet" filled="true" onClick={() => addFav(name.common)} /> */}
        {/* </ThemeProvider> */}
        {/* <ThemeContext.Consumer>{(theme) => <CardFavorite theme={theme.icon} checked={true}></CardFavorite>}</ThemeContext.Consumer> */}

        {/* <CardFavorite color="red" checked="true" /> */}
        {/* </Box> */}
        {/* </Button> */}

        {/* <Box>
                  <CardFavorite
                    theme={theme.icon}
                    checked={restaurant.favorite}
                  >
      
                  </CardFavorite>
                </Box> */}

        <Link to={name.common} state={{ data: data }}>
          See more
        </Link>
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
      {/* </LinkContainer> */}
    </Card>
  );
};

export default CountryCard;
