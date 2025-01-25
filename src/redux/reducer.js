// reducer.js
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../redux/action';
import { combineReducers } from "redux";

const initialState = {
  recipes: {
    filteredRecipes: [],
    loading: false,
    error: null,
  },
  favorites: {
    favoriteRecipes: [], // This is where the favorite recipes will be stored
  },
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      // Avoid duplicate favorites
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoriteRecipes: [...state.favorites.favoriteRecipes, action.payload],
        },
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoriteRecipes: state.favorites.favoriteRecipes.filter(
            (recipe) => recipe.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  recipes: recipeReducer,
  favorites: recipeReducer,
});

export default rootReducer;
