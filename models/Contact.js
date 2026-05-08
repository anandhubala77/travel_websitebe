const mongoose = require('mongoose');

// Define the Schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  message: {
    type: String,
    required: [true, 'Message body cannot be empty'],
    maxLength: [1000, 'Message cannot be more than 1000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically captures the time of the inquiry
  },
});

// Export the model
module.exports = mongoose.model('Contact', ContactSchema);