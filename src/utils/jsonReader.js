const fs = require('fs');
const path = require('path');

const readJSONFile = (fileName) => {
  const filePath = path.join(__dirname, '../../mock', fileName);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

module.exports = { readJSONFile };
