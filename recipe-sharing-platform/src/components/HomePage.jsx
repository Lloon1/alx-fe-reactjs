
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import data from '../data.json'; // Import the mock data

function HomePage() {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    // Set the recipes from the mock data
    setRecipes(data);
}, []);

return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-6">Recipe Sharing Platform</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-36 object-cover" />
            <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            </div>
        </Link>
        ))}
    </div>
    </div>
);
}

export default HomePage;
