const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(express.json());

const validateUser = [
  body('name').isString().notEmpty(),
  body('age').isInt({ min: 1 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

app.post('/users', validateUser, (req, res) => {
  res.send('User is valid');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
