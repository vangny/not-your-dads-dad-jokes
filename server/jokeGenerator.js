const axios = require('axios');
require('dotenv').config();

function weighData(data) {
  let starters = [];
  let phrases = {};

  for (let i = 0; i < data.length; i++) {
    let passage = data[i].match(/(\S+ \S+)|(\S+ \S+)(?= *\n|$)|\S+/g);

    if (!starters.includes(passage[0])) {
      starters.push(passage[0]);
    }

    for (let j = 0; j < passage.length; j++) {
      let word = passage[j].split(' ')[1] || passage[j].split(' ')[0];
      let currentPhrase = passage[j + 1];

      if (phrases[word] === undefined && currentPhrase !== undefined) {
        phrases[word] = [currentPhrase];
      } else if (currentPhrase !== undefined) {
        phrases[word].push(currentPhrase);
      }
    }
  }

  return {starters, phrases};
}


function createNewSentence(starters, phrases) {
  let intro = randomPhrase(starters);
  let phrase = nextPhrase(phrases, intro.split(' ')[1]) || nextPhrase(phrases, intro.split(' ')[0]);
  let word = phrase.split(' ')[1] || phrase.split(' ')[0];
  let newSentence = `${intro} ${phrase}`;

  while (phrases[word] !== undefined) {
    phrase = nextPhrase(phrases, word)
    word = phrase.split(' ')[1] || phrase.split(' ')[0];
    newSentence += ` ${phrase}`;
  }

  return newSentence;
}

function randomPhrase(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function nextPhrase(phrases, previousWord) {
  return randomPhrase(phrases[previousWord]);
}

function markov(data) {
  let { starters, phrases } = weighData(data);
  return createNewSentence(starters, phrases);
}

function getJokes(page = 0) {
  return axios({
    method: 'GET',
    url: 'https://icanhazdadjoke.com/search',
    headers: {
      'User-Agent': `${process.env.USER_AGENT}`,
      'Accept': 'application/json',
    },
    params: {
      'limit': 30,
      'page': page,
    },
  });
}

module.exports.markov = markov;
module.exports.getJokes = getJokes;