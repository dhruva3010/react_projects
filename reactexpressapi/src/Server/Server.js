const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  // Validate the username and password
  // (In a real app, you would verify the credentials against a database or a third-party service)

  if (username !== 'admin' || password !== 'password') {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Generate a JSON web token and send it back to the client
  const token = jwt.sign({ username }, 'jashusaywhednqwey218sd');
  res.json({ token });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
