const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bundleQuantity: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
