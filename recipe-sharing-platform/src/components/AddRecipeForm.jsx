
import React, { useState } from 'react';

function AddRecipeForm() {
const [title, setTitle] = useState('');
const [ingredients, setIngredients] = useState('');
const [steps, setSteps] = useState('');
const [errors, setErrors] = useState({ title: '', ingredients: '', steps: '' });

  // Validation function
const validate = () => {
    let valid = true;
    let newErrors = { title: '', ingredients: '', steps: '' };

    if (!title) {
    newErrors.title = 'Title is required';
    valid = false;
    }
    if (!ingredients) {
    newErrors.ingredients = 'Ingredients are required';
    valid = false;
    }
    if (!steps) {
    newErrors.steps = 'Preparation steps are required';
    valid = false;
    }

    setErrors(newErrors);
    return valid;
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Use the validate function
    if (validate()) {
      // Handle form submission
    console.log({ title, ingredients, steps });

      // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
    }
};

return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div>
        <label htmlFor="title" className="block text-gray-700">Recipe Title</label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
        <label htmlFor="ingredients" className="block text-gray-700">Ingredients</label>
        <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
        <label htmlFor="steps" className="block text-gray-700">Preparation Steps</label>
        <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
        Submit Recipe
        </button>
    </form>
    </div>
);
}

export default AddRecipeForm;
