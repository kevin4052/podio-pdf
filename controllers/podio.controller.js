const { callPhpClient } = require('./podioClient.helper');

const getItembyID = async (req, res) => {
  const { itemId } = req.params;

  try {
    const podioItem = await callPhpClient(itemId);
    const data = JSON.parse(podioItem);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ errorMessage: 'api call failed' });
  }
};

module.exports = {
  getItembyID,
};
