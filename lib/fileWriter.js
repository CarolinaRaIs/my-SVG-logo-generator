// import necessary package
const fs = require('fs')

// Save the SVG image to a file (logo.svg)
        //How: write the generated SVG image to a file named logo.svg using the fs.writeFile() method, and log a message to the console indicating whether the file was written successfully or not.
        // fs.writeFile() method used to write data to a file
        // logo.svg = arg 1 = filename of the file to be written
        // svg = arg 2 = data to be written to the file (svg variable that holds the generated SVG image)
        // (err) =>  = callback function that is called when file is written or an error occurs
        // If there is an error, the throw keyword will immediately stop the execution of the code and throw an error.
function writeToFile(filename, data) {
    console.log(data);
    fs.writeFile(filename, data || '', (err) => {
        if (err) throw err;
        // If there is no error a message will be printed
        console.log('Logo saved to logo.svg');
    });
}    
// When you assign something to module.exports, it becomes the result of the require() function call for that module    
module.exports = writeToFile;