const express = require('express');
const router = express.Router();
const PodioController = require('../controllers/podio.controller');

router.get('/podio', PodioController.getRoot);
router.post('/podio/item/', PodioController.getItembyID);

module.exports = router;
