
const http = require('http');
const url = require('url');
const { readPetsFile, writePetsFile } = require('./fileHandlers');
const handlePost = require('./postHandler');
const handlePut = require('./putHandler');

let pets;

async function init() {
  pets = await readPetsFile();
}

init();

const server = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Read operation - Get all pets
  if (req.method === 'GET' && (pathname === '/pets' || pathname === '/' )) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(pets));
  }

  // Create operation - Add a new pet (POST)
  else if (req.method === 'POST' && pathname === '/pets') {
    await handlePost(req, res, pets);
  }

  // Update operation - Update a pet by ID (PUT)
  else if (req.method === 'PUT' && pathname === '/pets') {
    await handlePut(req, res, pets);
  }

  // Handle unsupported routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
