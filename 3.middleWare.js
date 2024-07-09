const express = require('express');
const app = express();
const port = 3000;

// Custom middleware to log request details
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}, Request Method: ${req.method}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
