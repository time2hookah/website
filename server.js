const http = require('http');

/* http.createServer((req, res) => {
  res.end('Hamlet/s test');
}).listen(3001); */

http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World 2\n')
}).listen(3001); 



console.log('running node server2', process.argv);
