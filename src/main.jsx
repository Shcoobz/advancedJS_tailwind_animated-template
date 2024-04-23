/**
 * Core React and ReactDOM imports for UI rendering.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Main App component import.
 */
import App from './App.jsx';

/**
 * Stylesheet import for the application.
 */
import './css/index.css';

/**
 * Mounts the React application to the DOM.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
