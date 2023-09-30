const Client = require('../models/Client');

// Create a new client
exports.createClient = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { shopName, ADRESS, CITY, district, pin, mobile, AGENT, booktype } = req.body;
    const newClient = new Client({ shopName, ADRESS, CITY, district, pin, mobile, AGENT, booktype });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error creating client' });
  }
};

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Error getting clients' });
  }
};

// Get a client by ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Error getting client' });
  }
};

// Update a client by ID
exports.updateClientById = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating client' });
  }
};

// Delete a client by ID
exports.deleteClientById = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndRemove(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json({ message: 'Client deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client' });
  }
};
