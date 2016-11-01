const version = require('./version.json');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello world from TopSwagCode! We are currently running version: ${version.version}`);
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});
