// Import necessary packages
const inquirer = require('inquirer');
const svgCaptcha = require('svg-captcha');
const fs = require('fs');

// Prompt the user for input using inquirer
inquirer
    .prompt([
    {  
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      //The comparison input.length <= 3 checks if the length of the input is less than or equal to 3.
      //The function returns a boolean value (true or false) based on the result of the comparison.
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ])
  .then((answers) => {
    // Generate the SVG image and save it to a file
  });
