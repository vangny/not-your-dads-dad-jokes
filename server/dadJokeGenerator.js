function weighData(data) {
  let words = {};
  let starters = {};
  
  for (let i = 0; i < data.length; i++) {
    let passage = data[i].split(' ');
    
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
    
     if (nextWord[nextWord.length - 1] === '?' && newSentence.includes('?')) {
      while (nextWord[nextWord.length - 1] === '?') {
        nextWord = randomWord(words[currentWord]);
      }
    } 
    
    currentWord = nextWord;
    newSentence += ` ${currentWord}`;
  }

  console.log(newSentence);
}

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function markov(data) {
  let { starters, words } = weighData(data);

  createNewSentence(starters, words);
}

module.exports = markov;