const express = require('express');
const bodyparser = require('body-parser');
const markov = require('./jokeGenerator');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/api/dad-jokes', (req, res) => {
  let randomPage = Math.floor(Math.random() * 12);
  let jokes = [];
  axios({
    method: 'GET',
    url: 'https://icanhazdadjoke.com/search',
    headers: {
      'User-Agent': `${process.env.USER_AGENT}`,
      'Accept': 'application/json',
    },
    params: {
      'limit': 30,
      'page': randomPage,
    },
  })
  .then((data) => {
    // let jokes = data.data.results.map((joke) => joke.joke);
    data.data.results.forEach((joke) => jokes.push(joke.joke));
    // console.log(jokes)
    res.send(markov(jokes));
  });
})

module.exports = app;