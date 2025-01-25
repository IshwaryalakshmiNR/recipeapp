const initialState = {
    favoriteRecipes: [],
  };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return {
          ...state,
          favoriteRecipes: [...state.favoriteRecipes, action.payload],
        };
      case "REMOVE_FAVORITE":
        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.filter(
            (recipe) => recipe.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  