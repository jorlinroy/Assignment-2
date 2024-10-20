const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

mongoose.connect('mongodb+srv://jroy46:Tc3BZ4LyATrqCt6L@cluster0.jgzre.mongodb.net/Marketplace?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/api', productRoutes); // Route setup

app.get('/', (req, res) => {
  res.send('Welcome to DressStore application');
});

// Start the server
const port = process.env.PORT || 8080; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
