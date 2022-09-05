import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button, Text } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import { useSelector, useDispatch } from "react-redux";

const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

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
        <Button icon={<Favorite color="red" />} hoverIndicator />
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
