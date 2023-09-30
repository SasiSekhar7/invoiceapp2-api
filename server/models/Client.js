const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  ADRESS: {
    type: String,
    required: true,
  },
  CITY: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  AGENT: {
    type: String,
    required: true,
  },
  booktype: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
