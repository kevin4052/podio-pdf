const express = require('express');
const router = express.Router();
const PodioController = require('../controllers/podio.controller');
const { callPhpClient } = require('../controllers/podioClient.helper');

router.get('/podio', (req, res) => {
  res.send('no access');
});

router.get('/podio/item/:itemId', PodioController.getItembyID);

module.exports = router;
