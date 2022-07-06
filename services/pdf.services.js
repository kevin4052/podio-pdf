const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

const createPdf = async (inputFileName, outputFileName) => {
  try {
    const data = await readFile(inputFileName);
    console.log({ data: data.toString() });

    const pdfDoc = await PDFDocument.load(data);

    const form = pdfDoc.getForm();
    const fields = form.getFields();
    const fieldNames = {
      textFields: [],
      checkBoxFields: [],
      signatureFields: [],
    };

    fields.forEach((field) => {
      const type = field.constructor.name;
      const name = field.getName();

      if (type.toLocaleLowerCase().includes('text')) {
        fieldNames.textFields.push(name);
      }
      if (type.toLocaleLowerCase().includes('check')) {
        fieldNames.checkBoxFields.push(name);
      }
      if (type.toLocaleLowerCase().includes('signature')) {
        fieldNames.signatureFields.push(name);
      }
    });

    console.log({ fieldNames });

    const formMap = {
      lastName: { fieldName: 'Text274', fieldText: 'Hernandez' },
      firstName: { fieldName: 'Text275', fieldText: 'Kevin' },
      middleInitial: { fieldName: 'Text276', fieldText: 'A' },
      address: { fieldName: 'Text277', fieldText: '123 sw 123 st' },
      apt: { fieldName: 'Text278', fieldText: '123' },
      addressContinued: { fieldName: 'Text279', fieldText: 'more' },
      country: { fieldName: 'Text280', fieldText: 'USA' },
      city: { fieldName: 'Text281', fieldText: 'Miami' },
      state: { fieldName: 'Text282', fieldText: 'FL' },
      zipCode: { fieldName: 'Text283', fieldText: '33333' },
      telephone: { fieldName: 'Text284', fieldText: '3055551234' },
      dateOfBirth: { fieldName: 'Text285', fieldText: '09271950' },
    };

    Array.from(Object.keys(formMap)).forEach((key) => {
      form.getTextField(key.fieldName).setText(key.fieldText);
    });

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });

    await writeFile(outputFileName, pdfBytes);
    console.log('PDF created');
  } catch (err) {
    console.log({ err });
  }
};

module.exports = { createPdf };
