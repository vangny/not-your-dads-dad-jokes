const axios = require('axios');
require('dotenv').config();

function weighData(data) {
  let words = {};
  let starters = {};
  
  for (let i = 0; i < data.length; i++) {
    let passage = data[i].split(' ');
    // let passage = data[i].match(/(\S+ \S+)|(\S+ \S+)(?= *\n|$)|\S+/g);

    if (starters[passage[0]] === undefined) {
      starters[passage[0]] = [passage[1]];
    } else {
      starters[passage[0]].push(passage[1]);
    }
    
    for (let j = 1; j < passage.length; j++) {
      let currentWord = passage[j];
      let nextWord = passage[j + 1];

      if (words[currentWord] === undefined && nextWord !== undefined) {
        words[currentWord] = [nextWord];
      } else if (nextWord !== undefined) {
        words[currentWord].push(nextWord);
      }
    }
  }

  return {starters, words};
}

function createNewSentence(starters, words) {
  let intro = randomWord(Object.keys(starters));
  // console.log(intro);
  let currentWord = randomWord(starters[intro]);
  // console.log(currentWord);
  let newSentence = `${intro} ${currentWord}`;

  while(words[currentWord] !== undefined) {
    /* currentWord = randomWord(words[currentWord]); */
    let nextWord = randomWord(words[currentWord]);
    // console.log(words[currentWord]);
    
     if (nextWord[nextWord.length - 1] === '?' && newSentence.includes('?')) {
      while (nextWord[nextWord.length - 1] === '?') {
        nextWord = randomWord(words[currentWord]);
      }
    } 
    
    currentWord = nextWord;
    newSentence += ` ${currentWord}`;
  }

  return newSentence;
}

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function markov(data) {
  let { starters, words } = weighData(data);
  return createNewSentence(starters, words);
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