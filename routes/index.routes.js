const express = require('express');
const router = express.Router();
const { callPhpSDK } = require('../controllers/PodioController');

router.get('/podio', (req, res) => {
  res.send('no access');
});

router.get('/podio/item/:itemId', async (req, res) => {
  const { itemId } = req.params;

  try {
    const podioItem = await callPhpSDK(itemId);
    const data = JSON.parse(podioItem);
    // console.log({ data });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ errorMessage: 'api call failed' });
  }
});

module.exports = router;
