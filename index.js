// ============ File Imports ==================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// ============== MIDDLEWARE SETUP ==================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ================== ROUTES ==================
app.use('/api', require('./routes/index.routes'));

module.exports = app;
