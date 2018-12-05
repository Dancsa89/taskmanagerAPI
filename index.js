const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tasks = require('./controller/tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tasks', tasks);

app.listen(process.env.PORT, () => {
  console.log('Listen on PORT 4005');
});
