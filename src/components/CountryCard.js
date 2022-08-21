import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const CountryCard = ({ name, desc, image, data, country, add, likes, countries }) => {
const CountryCard = ({ capital, flag, name, languages, population, currencies, contpop, idnum, data }) => {
  if (population >= 1000000) {
    contpop = (population / 1000000).toFixed(1) + " M";
  } else {
    contpop = (population / 1000).toFixed(1) + " K";
  }

  return (
    <div className="card">
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
      <div class="skills-wrap text-center"> */}
      <p className="flag">{flag}</p>
      <p className="comname">{name.common}</p>
      <p className="ofname">{name.official}</p>
      <p className="capital">
        Capital: <span className="capname">{capital}</span>
      </p>
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default CountryCard;
