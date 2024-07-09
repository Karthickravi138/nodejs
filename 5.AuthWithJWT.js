const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

const users = [{ id: 1, username: 'user1', password: 'password1' }];

const secretKey = 'your_secret_key';

// Login route to generate JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).send('Invalid credentials');

  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).send('A token is required for authentication');

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid token');
  }

  return next();
};

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
