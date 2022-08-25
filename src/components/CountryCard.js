import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button, Text } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

  return (
    // <div className="card">
    <Card direction="column" height="35rem" width="30rem" background="light-1" border={{ color: "brand", size: "small" }} gap="xsmall">
      <CardHeader alignContent="start" alignSelf="end" border={{ color: "brand", size: "small" }}>
        {" "}
        <Text size="5rem"> {flag}</Text>
      </CardHeader>
      {/* <p className="flag">{flag}</p> */}
      <CardBody pad="medium">
        {" "}
        {name.common}
        {name.official}
        {/* <p className="ofname">{name.official}</p> */}
        {/* <p className="capital"> */} Capital: <span className="capname">{capital}</span>
        {/* </p> */}
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
      {/* <p className="comname">{name.common}</p>
      <p className="ofname">{name.official}</p>
      <p className="capital">
        Capital: <span className="capname">{capital}</span>
      </p> */}
      {/* <h1>{idnum}</h1> */}
      <p className="languages">
        LANGUAGE(S):{" "}
        {Object.values(languages || {}).map((value, i) => (
          <span key={i}>{(i ? ", " : "") + value}</span>
        ))}
      </p>
      <p className="languages">POPULATION: {contpop}</p>
      <p className="languages">
        CURRENCIE(S):{" "}
        {Object.values(currencies || {}).map((value, i) => (
          <span key={i}>{(i ? ", " : "") + value.name + " (" + value.symbol + ")"}</span>
        ))}
      </p>

      <div>
        <Link to={name.common} state={{ data: data }}>
          See more
        </Link>
      </div>
    </Card>
    // </div>
  );
};

export default CountryCard;
