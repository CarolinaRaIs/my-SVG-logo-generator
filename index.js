// Create HTTP server that listens on port 3000

// Import required packages
const http = require('http');
const createLogo = require('./lib/createLogo');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Call createLogo function
  createLogo()
    .then((logo) => {
      // Set response headers
      res.writeHead(200, {
        'Content-Type': 'image/svg+xml',
        'Content-Length': logo.length,
      });

      // Send response with logo
      res.end(logo);
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.end('Error creating logo');
    });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
