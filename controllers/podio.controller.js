const { callPhpClient } = require('./podioClient.helper');
const pdfService = require('../services/pdf.services');

const getRoot = (req, res) => {
  res.send('no access');
};

const getItembyID = async (req, res) => {
  const { itemId } = req.params;
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=form-test.pdf`,
  });

  //   try {
  //     const podioItem = await callPhpClient(itemId);
  //     const data = JSON.parse(podioItem);
  //     res.status(200).json(data);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(404).json({ errorMessage: 'api call failed' });
  //   }
};

module.exports = {
  getRoot,
  getItembyID,
};
