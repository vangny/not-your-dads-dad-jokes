const express = require('express');
const bodyparser = require('body-parser');
const { getJokes, markov } = require('./jokeGenerator');
const axios = require('axios');
const expressStaticGzip = require('express-static-gzip');

const app = express();

app.use('/', expressStaticGzip(`${__dirname}/../client/dist`));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/api/dad-jokes', (req, res) => {
  let randomPage = Math.floor(Math.random() * 11);
  let jokes = [];
  axios.all([getJokes(randomPage), getJokes(randomPage + 1), getJokes(randomPage + 2), getJokes(randomPage + 3), getJokes(randomPage + 4)])
    .then(axios.spread((firstSet, secondSet, thirdSet, fourthSet, fifthSet) => {
      firstSet.data.results.forEach((joke) => jokes.push(joke.joke.replace(/['"]+/g, '')));
      secondSet.data.results.forEach((joke) => jokes.push(joke.joke.replace(/['"]+/g, '')));
      thirdSet.data.results.forEach((joke) => jokes.push(joke.joke.replace(/['"]+/g, '')));
      fourthSet.data.results.forEach((joke) => jokes.push(joke.joke.replace(/['"]+/g, '')));
      fifthSet.data.results.forEach((joke) => jokes.push(joke.joke.replace(/['"]+/g, '')));
      res.send(markov(jokes));
    }));
})

module.exports = app;