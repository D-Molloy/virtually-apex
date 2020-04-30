require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`API Server listening: http://localhost:${PORT}`)
);
