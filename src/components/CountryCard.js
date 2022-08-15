import React from "react";
import { Link } from "react-router-dom";

// const CountryCard = ({ name, desc, image, data, country, add, likes, countries }) => {
const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

  return (
    <div className="card">
      <p>{flag}</p>
      <h2>{name.common}</h2>
      <h2>{name.official}</h2>
      <h2>{capital}</h2>
      <h1>{idnum}</h1>
      <h1>
        LANGUAGE(S):{" "}
        {Object.values(languages || {}).map((value, i) => (
          <span key={i}>{(i ? ", " : "") + value}</span>
        ))}
      </h1>
      <h1>POPULATION: {contpop}</h1>
      <h1>
        CURRENCIE(S):{" "}
        {Object.values(currencies || {}).map((value, i) => (
          <span key={i}>{(i ? ", " : "") + value.name + " (" + value.symbol + ")"}</span>
        ))}
      </h1>

      {/* <p>{fifa}</p> */}
      {/* <img src={image} alt={name} />
      <img className="flag" src={country.flags.png} alt={country.name.common} /> */}

      {/* <span onClick={add} className="material-icons likeBut">
        favorite
      </span>
      <div className="likes">{likes}</div> */}

      <div>
        {/* <Link to={name.common} state={{ data: data, country: country }}> */}
        <Link to={name.common} state={{ data: data }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
