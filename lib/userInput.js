// Import necessary packages
const inquirer = require('inquirer');

console.log('Exporting getUserInput function...')
// Prompt the user for input using inquirer
    //async function allows you to use the await keyword inside it to wait for the completion of a Promise. When an async function encounters an await keyword, it pauses the execution of the function and waits for the Promise to resolve. Once the Promise is resolved, the async function resumes execution and continues to execute the rest of the code.
    // asynchronous operation: prompting user for input using inquirer 
    // inquirer.promp() = method that returns a promise that resolves with the user's answers once they have been provided
function getUserInput() {
    return inquirer.prompt ([
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
            name: 'shapeType',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
          },
          {
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
          },
    ]).then((answers)=>{
      return {
        text: answers.text,
        textColor: answers.textColor,
        shapeType: answers.shapeType,
        shapeColor: answers.shapeColor
    };
    })

    
}

module.exports = getUserInput;