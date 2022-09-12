import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favorites",
  initialState: {
    favlist: [],
  },
  reducers: {
    addFavorites(state, action) {
      //   state.favorites = action.payload;
      //   console.log(action.payload);

      state.favorites.push({
        id: new Date().toISOString(),
        // item: action.payload.name.common,
        favorite: "yes",
      });

      //   const countryToFav = state.favorites.find((coun) => coun.name.common === action.payload);
      //   console.log(countryToFav.name.common);
    },
  },
});

export const { addFavorites } = cartSlice.actions;

export default cartSlice.reducer;

// toggleTodoComplete(state, action) {
//       // console.log(state);
//       // console.log(action.payload);
//     const toggledTodo = state.todos.find((todo) => todo.id === action.payload);
//     toggledTodo.completed = !toggledTodo.completed;
