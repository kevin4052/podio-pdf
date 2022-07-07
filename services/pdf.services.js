const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

const createPdf = async (data) => {
  // /home/kevinhdz/dev/podio-pdf/services
  //   console.log(__dirname);

  try {
    const pdfFile = await readFile(
      '/home/kevinhdz/dev/podio-pdf/docs/MED-SUP-APP_BLANK.pdf'
    );
    const pdfDoc = await PDFDocument.load(pdfFile);
    const form = pdfDoc.getForm();
    const formMap = {
      lastName: { fieldName: 'Text274', fieldText: data.formName },
      firstName: { fieldName: 'Text275', fieldText: data.itemId },
      middleInitial: { fieldName: 'Text276', fieldText: 'A' },
      address: { fieldName: 'Text277', fieldText: data.amount.value },
      apt: { fieldName: 'Text278', fieldText: '123' },
      addressContinued: { fieldName: 'Text279', fieldText: 'more' },
      country: { fieldName: 'Text280', fieldText: 'USA' },
      city: { fieldName: 'Text281', fieldText: 'Miami' },
      state: { fieldName: 'Text282', fieldText: 'FL' },
      zipCode: { fieldName: 'Text283', fieldText: '33333' },
      telephone: { fieldName: 'Text284', fieldText: '305 555 1234' },
      dateOfBirth: { fieldName: 'Text285', fieldText: '09271950' },
    };

    Array.from(Object.keys(formMap)).forEach((key) => {
      const { fieldName, fieldText } = formMap[key];
      form.getTextField(fieldName).setText(fieldText);
    });

    const pdfBytes = await pdfDoc.save();

    await writeFile(
      '/home/kevinhdz/dev/podio-pdf/docs/MED-SUP-APP_BLANK-new.pdf',
      pdfBytes
    );
    console.log('PDF created');
    return 'MED-SUP-APP_BLANK-new.pdf';
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createPdf };
