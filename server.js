const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS policy
app.use(cors());

const PORT = process.env.PORT || 5000;

// MongoDB connection (Update this to your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/gamerzone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));


// User routes
app.use('/', require('./routes/users'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
