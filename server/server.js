const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Mount your routes here
app.use('/books', require('./routes/book'));
app.use('/clients', require('./routes/client'));
app.use('/transporters', require('./routes/transporter'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
