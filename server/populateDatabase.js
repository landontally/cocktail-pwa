const axios = require('axios');
const mongoose = require('mongoose');
const Cocktail = require('./models/Cocktail');

const connectionString = 'your_connection_string';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});