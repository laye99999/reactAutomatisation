const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let items = [];
let idCounter = 1;

// POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Identifiants incorrects' });
  }
});

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
  const { title, description } = req.body;
  const newItem = { id: idCounter++, title, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Item non trouvé' });
  }
  item.title = title;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(i => i.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Backend Node démarré sur http://localhost:${port}`);
});
