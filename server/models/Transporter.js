const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Transporter = mongoose.model('Transporter', transporterSchema);

module.exports = Transporter;
