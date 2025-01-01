const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route to test
app.get('/', (req, res) => {
  res.send('Hello from Vercel!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});