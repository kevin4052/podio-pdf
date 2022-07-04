// ============ File Imports ==================
require('dotenv').config();
const express = require('express');
const app = express();

// ============== MIDDLEWARE SETUP ==================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================== ROUTES ==================
app.use('/api', require('./routes/index.routes'));

module.exports = app;
