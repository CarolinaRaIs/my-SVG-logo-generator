// Import necessary packages and files
//const createLogo = require('./lib/createLogo');
//const writeToFile = require('./lib/fileWriter');

//async function generateAndSaveLogo() {
  //try {
    //const svgWithText = await createLogo();
    //writeToFile('logo.svg', svgWithText);
    //console.log('Logo saved to logo.svg');
  //} catch (error) {
    //console.error(error);
  //}
//}

//generateAndSaveLogo();




// Import necessary packages and files
const createLogo = require('./lib/createLogo');
const writeToFile = require('./lib/fileWriter');

async function generateAndSaveLogo() {
  try {
    const svg = await createLogo(); // Generate the logo SVG without text
    const text = 'ABC'; // Replace 'ABC' with your desired text
    const textColor = 'red'; // Replace 'red' with your desired text color

    const svgWithText = createLogo.addText(svg, text, textColor); // Add the text to the SVG

    writeToFile('logo.svg', svgWithText); // Save the modified SVG to a file
    console.log('Logo saved to logo.svg');
  } catch (error) {
    console.error(error);
  }
}

//generateAndSaveLogo();

