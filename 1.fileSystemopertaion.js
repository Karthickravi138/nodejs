const fs = require('fs');

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Modify the content
  const modifiedData = data.toUpperCase();

  // Write to a new file
  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) throw err;
    console.log('File has been written.');
  });
});
