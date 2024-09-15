
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

function RecipeDetail() {
const { id } = useParams(); // Get the recipe ID from the URL
const [recipe, setRecipe] = useState(null);

useEffect(() => {
    // Find the recipe with the matching ID
    const recipeData = data.find((item) => item.id === parseInt(id));
    setRecipe(recipeData);
}, [id]);

if (!recipe) return <div className="container mx-auto p-4">Loading...</div>;

return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
    <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover rounded-lg mb-6" />
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {/* Replace with actual ingredients */}
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p>
          {/* Replace with actual cooking instructions */}
        Step 1: Do this.<br />
        Step 2: Do that.<br />
        Step 3: Finish up.
        </p>
    </div>
    </div>
);
}

export default RecipeDetail;
