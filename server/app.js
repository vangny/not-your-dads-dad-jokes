const express = require('express');
const bodyparser = require('body-parser');
const dadJokes = require('./jokeGenerator');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/api/dad-jokes', (req, res) => {
  dadJokes();
})

module.exports = app;