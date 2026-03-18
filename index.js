const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes 👉 THIS LINE GOES HERE
app.use('/api/notes', require('./routes/noteRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});