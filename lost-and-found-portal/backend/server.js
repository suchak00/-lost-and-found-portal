const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route for lost items
app.get('/api/lost-items', (req, res) => {
  res.json([
    { id: 1, item: 'Wallet', description: 'Black leather wallet lost in the park' },
    { id: 2, item: 'Bicycle', description: 'Red mountain bike left near the library' },
  ]);
});

// Sample route for found items
app.get('/api/found-items', (req, res) => {
  res.json([
    { id: 1, item: 'Keys', description: 'Set of keys found at the bus stop' },
    { id: 2, item: 'Phone', description: 'iPhone found in the cafe' },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});