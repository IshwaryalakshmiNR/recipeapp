import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch recipes from the Edamam API
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async (query) => {
  const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`;
  const response = await axios.get(apiUrl);
  return response.data.hits.map((hit) => ({
    id: hit.recipe.uri.split("_")[1],
    title: hit.recipe.label,
    image: hit.recipe.image,
    description: hit.recipe.cuisineType?.[0] || "N/A",
    ingredients: hit.recipe.ingredientLines,
    instructions: "Visit Edamam for detailed instructions.", // Placeholder
    prepTime: hit.recipe.totalTime || "Unknown",
    servingSize: hit.recipe.yield,
  }));
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    filteredRecipes: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = state.items.find((item) => item.id === action.payload);
      if (state.favorites.find((fav) => fav.id === recipe.id)) {
        state.favorites = state.favorites.filter((fav) => fav.id !== recipe.id);
      } else {
        state.favorites.push(recipe);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredRecipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
