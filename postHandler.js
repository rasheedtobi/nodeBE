
const { writePetsFile, readPetsFile } = require('./fileHandlers');

async function handlePost(req, res, pets) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    const newPet = JSON.parse(body);
    newPet.id = pets.length + 1; 
    pets.push(newPet);

    await writePetsFile(pets);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newPet));
  });
}

module.exports = handlePost;
