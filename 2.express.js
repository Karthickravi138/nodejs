const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Data received: ${JSON.stringify(receivedData)}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
