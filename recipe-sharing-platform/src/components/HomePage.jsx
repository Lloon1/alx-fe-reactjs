import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import the mock data

function HomePage() {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    // Simulate data fetching
    setRecipes(data);
}, []);

return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-36 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
        </div>
        ))}
    </div>
    </div>
);
}

export default HomePage;
