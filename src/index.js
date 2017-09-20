const http = require('http');
const  app = require('./App');

// Set up server
const server = http.createServer(app);

// Start server
server.listen(3000);
server.on('listening', function() {
  console.log('Listening on port 3000');
});
