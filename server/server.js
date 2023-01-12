// CREATE QUERIES TO THE DB WITH NODE AND EXPRESS JS
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use('/build',express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  // res.send('Hello World');
  // console.log(path.resolve(__dirname, '../public/index.html'));
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});