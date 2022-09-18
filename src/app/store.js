import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import countriesSlice from "../features/countries/countriesSlice";
import cartSlice from "../features/countries/cartSlice";

const rootReducer = combineReducers({
  countries: countriesSlice,
  favorites: cartSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default configureStore({
//   reducer: { countries: countriesSlice, favorites: cartSlice },
// });

// const store = configureStore({
//   reducer: { countries: countriesSlice, favorites: cartSlice },
// });
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
