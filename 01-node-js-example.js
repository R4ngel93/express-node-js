/* Requiring http */
const http = require('http');

/* Creating server */
http.createServer((req, res) => {
  res.end('Hello from Node.js');
}).listen(3000);