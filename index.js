const http = require('http');
const url = require('url');
const fs = require('fs');
const { createServer } = require('node:http');
const hostname = process.env.IP;
const port = process.env.PORT;

const server = createServer((req, res) => {
  if (req.url === '/api/data' && req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello from the backend!' }));
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
