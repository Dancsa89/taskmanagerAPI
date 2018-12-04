const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Szia!');
});

app.listen(process.env.PORT, () => {
  console.log('Listen on PORT 4005');
});