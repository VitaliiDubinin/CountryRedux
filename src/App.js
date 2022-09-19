import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

// import "./App.css";
import CountrySingle from "./components/CountrySingle";
import CountriesSingle from "./components/CountriesSingle";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
import Favorites from "./components/Favorites";
import TwoColumnDashboard from "./components/dashboard/TwoColumnDashboard";
// import "bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import AddRecipe from "./components/AddRecipe";
// import AddRecForm from "./components/AddRecForm";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "1.5rem",
      height: "2rem",
    },
  },
};
const RouterWrapper = (props) => {
  const params = useParams();
  // return <CountriesSingle params={params} {...props} />;
  return <CountrySingle params={params} {...props} />;
  // return <TwoColumnDashboard params={params} {...props} />;
};

function App() {
  return (
    // <Grommet theme={theme}>
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/countries" element={<Countries />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/dashboard" element={<TwoColumnDashboard />} />
            <Route path="/countries/:countrysingle" element={<RouterWrapper />} />
            {/* <Route path="/addrecipe" element={<AddRecForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
