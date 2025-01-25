import axios from "axios";

const fetchRecipes = async (query) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  try {
    const response = await axios.get(
      `${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response.data);
    return response.data.hits; // Recipes will be here
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export default fetchRecipes;
