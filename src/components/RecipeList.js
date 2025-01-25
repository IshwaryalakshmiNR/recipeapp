import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoriteSlice";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.filteredRecipes);
  const favoriteRecipes = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleFavoriteToggle = (recipe) => {
    const isFavorited = favoriteRecipes.some((fav) => fav.id === recipe.id);
    if (isFavorited) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-center">No recipes found.</p>
      ) : (
        <div className="row">
          {recipes.map((recipe) => {
            const isFavorited = favoriteRecipes.some((fav) => fav.id === recipe.id);
            return (
              <div className="col-md-4 mb-4" key={recipe.id}>
                <div className="card h-100">
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>
                    <p className="card-text">Calories: {Math.round(recipe.calories)}</p>

                    {/* Navigate to Recipe Details Page */}
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    
                    {/* Favorite Button */}
                    <button
                      className={`btn ${isFavorited ? "btn-danger" : "btn-outline-warning"}`}
                      onClick={() => handleFavoriteToggle(recipe)}
                    >
                      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
