import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="container mt-4">
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet! Add some recipes to your favorites.</p>
      ) : (
        <RecipeList recipes={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
