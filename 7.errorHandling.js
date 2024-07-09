const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
  const log = `Request URL: ${req.url}, Request Method: ${req.method}\n`;
  fs.appendFileSync('request_logs.txt', log);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  fs.appendFileSync('error_logs.txt', `${err.stack}\n`);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
