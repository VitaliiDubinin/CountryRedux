import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countries/countriesSlice";
import cartSlice from "../features/countries/cartSlice";
export default configureStore({
  reducer: { countries: countriesSlice, favorites: cartSlice },
});
