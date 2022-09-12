import { createSlice } from "@reduxjs/toolkit";
// import CountryCard from "../../components/CountryCard";
import countryService from "../../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
    search: "",
  },
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      // console.log(action.payload);
      state.search = action.payload;
    },
  },
});

export const initCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, search, isLoading } = countriesSlice.actions;
// export const text = (state) => state.todos.itemtext;
export default countriesSlice.reducer;

/* we are replace "States" to the reducers
  // const [country, setCountry] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");
  */
