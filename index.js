// Import necessary packages and files
const createLogo = require('./lib/createLogo');
const writeToFile = require('./lib/fileWriter');

async function generateAndSaveLogo() {
  try {
    const svgWithText = await createLogo();
    writeToFile('logo.svg', svgWithText);
    console.log('Logo saved to logo.svg');
  } catch (error) {
    console.error(error);
  }
}

//generateAndSaveLogo();
