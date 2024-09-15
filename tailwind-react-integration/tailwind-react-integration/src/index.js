import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your Tailwind CSS file
import App from './App'; // Import your main App component

// Render the App component inside the root element in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
