// Add this line at the top of app.js
const Cocktail = require('./models/Cocktail');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Replace 'your_connection_string' with your MongoDB Atlas connection string or local MongoDB connection string
const connectionString = 'your_connection_string';

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// Get all cocktails
app.get('/api/cocktails', async (req, res) => {
    try {
      const cocktails = await Cocktail.find();
      res.json(cocktails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get cocktails by name
app.get('/api/cocktails/search/:name', async (req, res) => {
    try {
      const name = req.params.name;
      const cocktails = await Cocktail.find({ strDrink: { $regex: name, $options: 'i' } });
      res.json(cocktails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get a cocktail by id
  app.get('/api/cocktails/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const cocktail = await Cocktail.findOne({ idDrink: id });
      res.json(cocktail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));