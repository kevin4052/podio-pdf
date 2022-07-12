const { callPhpClient } = require('./podioClient.helper');
const pdfService = require('../services/pdf.services');
const path = require('path');
const fs = require('fs');

const getRoot = (req, res) => {
  res.send('no access');
};

const getItembyID = async (req, res) => {
  const { itemId, formName } = req.body;

  console.log(req.body);

  try {
    const podioItem = await callPhpClient(itemId);
    const data = JSON.parse(podioItem);
    data.itemId = itemId;
    data.formName = formName;
    console.log(data);
    const fileName = await pdfService.createPdf(data);
    const filePath = `/home/kevinhdz/dev/podio-pdf/docs/${fileName}`;
    res.download(filePath, `${data.category[0].text}.pdf`);
  } catch (error) {
    console.error(error);
    res.status(404).json({ errorMessage: 'api call failed' });
  }
};

module.exports = {
  getRoot,
  getItembyID,
};
