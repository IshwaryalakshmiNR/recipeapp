import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/recipeSlice';
import RecipeList from '../components/RecipeList';
const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const status = useSelector((state) => state.recipes.status);

  // Fetch default recipes on page load
  useEffect(() => {
    dispatch(fetchRecipes('chicken')); // Example default query
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1>Welcome to Recipe Finder</h1>
      <p>Search for your favorite recipes or browse our collection!</p>
      {status === 'loading' && <p>Loading recipes...</p>}
      {status === 'failed' && <p>Failed to load recipes. Try again later.</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
