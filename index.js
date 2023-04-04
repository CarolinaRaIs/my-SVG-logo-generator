// Create HTTP server that listens on port 3000
  // The server listens on port 3000 by default, and when a request is made to the server, it will generate an SVG image based on the parameters of the request and return it in the response.

// Import required packages
// http module = creates an HTTP server that listens for incoming requests and sends back responses (in the form of SVG images.)
const http = require('http');
const createLogo = require('./lib/createLogo');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Call createLogo function
  createLogo()
    .then((logo) => {
      // Set response headers
      // If the promise is resolved successfully (200 = successful request):
      // res.writeHead(errorstatuscode#, {object that contains the header fields and their values}) = method that writes the response header to the HTTP response.
      // image/svg+xml = indicates that the server is sending an SVG image in XML format.
      // content-Lentth (measured in bytes) 
      // logo.length = length of SVG image in bytes
      res.writeHead(200, {
        'Content-Type': 'image/svg+xml',
        'Content-Length': logo.length,
      });

      // Send response with logo
      res.end(logo);
    })
    // If an error occurs during the Promise's execution (500 = server side error):
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.end('Error creating logo');
    });
});

// server = refers to HTTP server created using the http module in Node.js (const http = require('http');)
// Listen on port 3000 (by default) for incoming requests and routes those requests to the appropriate handler functions.
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
