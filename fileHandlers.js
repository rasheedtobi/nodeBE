// fileHandlers.js
const fs = require('fs/promises');
const path = require('path');

const petsFilePath = path.join(__dirname, 'pets.json');

async function readPetsFile() {
  try {
    const data = await fs.readFile(petsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writePetsFile(data) {
  await fs.writeFile(petsFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = { readPetsFile, writePetsFile };
