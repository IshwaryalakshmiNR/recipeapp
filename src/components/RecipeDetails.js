import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams(); // Getting the recipe id from the URL
  const recipe = useSelector((state) =>
    state.recipes.filteredRecipes.find((item) => item.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="container mt-4">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="img-fluid mb-3" />
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Preparation Time:</strong> {recipe.prepTime} minutes</p>
      <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
      <p><strong>Serving Size:</strong> {recipe.servingSize}</p>
    </div>
  );
};

export default RecipeDetails;
