// import { useSelector } from 'react-redux';

// const Favorites = () => {
//   const favorites = useSelector((state) => state.favorites);

//   return (
//     <div className="container mt-4">
//       <h2>Favorites</h2>
//       <ul>
//         {favorites.map((recipe) => (
//           <li key={recipe.label}>{recipe.label}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Favorites;
import React from "react";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favoriteRecipes = useSelector((state) => state.favorites);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Favorite Recipes</h1>
      {favoriteRecipes.length === 0 ? (
        <p className="text-center">No favorites added yet.</p>
      ) : (
        <div className="row">
          {favoriteRecipes.map((recipe) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;


