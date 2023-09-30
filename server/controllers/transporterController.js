const Transporter = require('../models/Transporter');

// Create a new transporter
exports.createTransporter = async (req, res) => {
  try {
    const { name } = req.body;
    const newTransporter = new Transporter({ name });
    await newTransporter.save();
    res.status(201).json(newTransporter);
  } catch (error) {
    res.status(500).json({ error: 'Error creating transporter' });
  }
};

// Get all transporters
exports.getAllTransporters = async (req, res) => {
  try {
    const transporters = await Transporter.find();
    res.json(transporters);
  } catch (error) {
    res.status(500).json({ error: 'Error getting transporters' });
  }
};

// Get a transporter by ID
exports.getTransporterById = async (req, res) => {
  try {
    const transporter = await Transporter.findById(req.params.id);
    if (!transporter) {
      return res.status(404).json({ error: 'Transporter not found' });
    }
    res.json(transporter);
  } catch (error) {
    res.status(500).json({ error: 'Error getting transporter' });
  }
};

// Update a transporter by ID
exports.updateTransporterById = async (req, res) => {
  try {
    const updatedTransporter = await Transporter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTransporter) {
      return res.status(404).json({ error: 'Transporter not found' });
    }
    res.json(updatedTransporter);
  } catch (error) {
    res.status(500).json({ error: 'Error updating transporter' });
  }
};

// Delete a transporter by ID
exports.deleteTransporterById = async (req, res) => {
  try {
    const deletedTransporter = await Transporter.findByIdAndRemove(req.params.id);
    if (!deletedTransporter) {
      return res.status(404).json({ error: 'Transporter not found' });
    }
    res.json({ message: 'Transporter deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting transporter' });
  }
};
