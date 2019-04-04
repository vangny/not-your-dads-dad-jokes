const express = require('express');
const bodyparser = require('body-parser');
const { getJokes, markov } = require('./jokeGenerator');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/api/dad-jokes', (req, res) => {
  let randomPage = Math.floor(Math.random() * 11);
  let jokes = [];
  axios.all([getJokes(randomPage), getJokes(randomPage + 1), getJokes(randomPage + 2), getJokes(randomPage + 3), getJokes(randomPage + 4)])
    .then(axios.spread((firstSet, secondSet, thirdSet, fourthSet, fifthSet) => {
      firstSet.data.results.forEach((joke) => jokes.push(joke.joke));
      secondSet.data.results.forEach((joke) => jokes.push(joke.joke));
      thirdSet.data.results.forEach((joke) => jokes.push(joke.joke));
      fourthSet.data.results.forEach((joke) => jokes.push(joke.joke));
      fifthSet.data.results.forEach((joke) => jokes.push(joke.joke));
      // console.log(jokes);
      res.send(markov(jokes));
    }));


  // .then((data) => {
  //   // let jokes = data.data.results.map((joke) => joke.joke);
  //   data.data.results.forEach((joke) => jokes.push(joke.joke));
  //   // console.log(jokes)
  //   res.send(markov(jokes));
  // });
})

module.exports = app;