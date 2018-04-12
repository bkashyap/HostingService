var http = require('http');
console.log('starting nodejs server');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello world, hosting service');
};
var www = http.createServer(handleRequest);
www.listen(8081);

