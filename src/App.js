import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";
import CountrySingle from "./components/CountrySingle";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Countries from "./components/Countries";
// import AddRecipe from "./components/AddRecipe";
// import AddRecForm from "./components/AddRecForm";

const RouterWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countrysingle" element={<RouterWrapper />} />
          {/* <Route path="/addrecipe" element={<AddRecForm />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
