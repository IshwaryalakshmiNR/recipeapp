// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import recipesReducer from "./recipeSlice";
import favoritesReducer from "./favoriteSlice";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
