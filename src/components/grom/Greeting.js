import React, { useContext } from "react";
import { PageHeader } from "grommet";
import { UserContext } from "./UserContext";

export const Greeting = (favor) => {
  console.log(favor);
  const { user } = useContext(UserContext);
  // return <PageHeader title={`Hello, ${user.firstName}!`} subtitle="Welcome to the HPE Common Cloud Console." />;
  return <PageHeader title={`Hello, React22K !` + { favor }} subtitle="Welcome to the CountryWeatherApp." />;
};
