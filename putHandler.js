
const { writePetsFile, readPetsFile } = require('./fileHandlers');

async function handlePut(req, res, pets) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    const updatedPet = JSON.parse(body);
    const petId = updatedPet.id;

    const index = pets.findIndex((p) => p.id === petId);

    if (index !== -1) {
      pets[index] = { ...pets[index], ...updatedPet };
      await writePetsFile(pets);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(pets[index]));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Pet not found');
    }
  });
}

module.exports = handlePut;
