import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
// import "bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // const getRecipes = () => axios.get("http://localhost:3010/recipes");
  // const getRecipes = () => axios.get("https://my-json-server.typicode.com/vitaliidubinin/jsonforrecipeapp/recipes");
  // const getRecipes = () => axios.get("https://tasteofdream.herokuapp.com/api/recipes");
  const getCountry = () => axios.get("https://restcountries.com/v3.1/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getCountry()]).then(function (results) {
      // const recipesData = results[0];
      const countriesData = results[0];
      // console.log(countriesData);
      // console.log(countriesData.data);

      setCountry(countriesData.data);
      // console.log(countriesData.data.indexOf());
      // console.log(country);
      setLoading(false);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const countryFilter = country.filter((res) => {
    return res.name.common.toLowerCase().includes(search.toLowerCase());
  });

  // const countryFilter = country;

  if (loading) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
        </div>

        <div className="cards">
          {countryFilter.map((scount) => (
            <CountryCard key={countryFilter.indexOf(scount)} data={scount} {...scount} />
          ))}
        </div>
      </>
    );
  }
};
// }

export default Countries;
