const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Password will be stored as a simple string
});

module.exports = mongoose.model('User', userSchema);
