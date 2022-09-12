import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favorites",
  //   name: "countries",
  initialState: {
    favlist: [],
  },
  reducers: {
    addFavorites(state, action) {
      //   state.favorites = action.payload;
      console.log(action.payload);

      const inFav = state.favlist.find((coun) => coun.item === action.payload);
      console.log(inFav);
      if (!inFav) {
        state.favlist.push({
          id: new Date().toISOString(),
          item: action.payload,
          favorite: "yes",
        });
      } else {
        console.log("doubled===removed");
        state.favlist = state.favlist.filter((coun) => coun.item !== action.payload);
      }
    },
  },
});

export const { addFavorites } = cartSlice.actions;

export default cartSlice.reducer;

// state.todos = state.todos.filter((todo) => todo.id !== action.payload);
