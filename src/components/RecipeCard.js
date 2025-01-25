import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoriteSlice';
import { Link } from 'react-router-dom';
const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.recipe.uri === recipe.uri);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ recipe }));
    } else {
      dispatch(addFavorite({ recipe }));
    }
  };

  return (
    <div className="card mb-4">
      <img src={recipe.image} className="card-img-top" alt={recipe.label} />
      <div className="card-body">
        <h5 className="card-title">{recipe.label}</h5>
        <p className="card-text">Calories: {Math.round(recipe.calories)}</p>
        <Link to={`/recipe/${encodeURIComponent(recipe.uri)}`} className="btn btn-primary">
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
  );
};

export default RecipeCard;
