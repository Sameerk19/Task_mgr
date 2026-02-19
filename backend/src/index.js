const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Task Manager</h1><p>Welcome to the Task Manager application!</p>');
});

app.get('/users', (req, res) => {
  res.send('<h1>Users Tab');
});

app.listen(8000, () => {
  console.log('Server started on port 800');
});