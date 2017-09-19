const http = require('http');
const App = require('./App');

const server = http.createServer(App.default);
server.listen(3000);
server.on('listening', function(){
  console.log('Listening on port 3000')
});
