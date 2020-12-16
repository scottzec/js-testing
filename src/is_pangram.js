const { TestScheduler } = require("jest");

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {

  for (const alphaLetter of ALPHABET) {
    if (!text.includes(alphaLetter)) {
      return false;
    }
  }

  return true
  
};

console.log(isPangram('the_quick brown fox jumps over the lazy dog'))

module.exports = isPangram;
