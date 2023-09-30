const express = require('express');
const router = express.Router();
const transporterController = require('../controllers/transporterController');

// Create a new transporter
router.post('/', transporterController.createTransporter);

// Get all transporters
router.get('/', transporterController.getAllTransporters);

// Get a transporter by ID
router.get('/:id', transporterController.getTransporterById);

// Update a transporter by ID
router.put('/:id', transporterController.updateTransporterById);

// Delete a transporter by ID
router.delete('/:id', transporterController.deleteTransporterById);

module.exports = router;
