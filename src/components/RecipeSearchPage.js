import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const RecipeSearchPage = () => {
  return (
    <div className="container">
      <h2 className="my-3">Search for Recipes</h2>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default RecipeSearchPage;
