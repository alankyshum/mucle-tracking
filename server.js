const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.use('/vendor', express.static('./node_modules'));
app.use('/', express.static('./public'));

app.listen(8080);
