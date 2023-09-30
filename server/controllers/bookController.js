const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { name, bundleQuantity, rate } = req.body;
    const newBook = new Book({ name, bundleQuantity, rate });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book' });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error getting books' });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error getting book' });
  }
};

// Update a book by ID
exports.updateBookById = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Error updating book' });
  }
};

// Delete a book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting book' });
  }
};
