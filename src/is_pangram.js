const { TestScheduler } = require("jest");

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {
    for (const alphaLetter of ALPHABET) {
    if (!text.includes(alphaLetter)) {
      return false;
    }
  }

  return true;
  
};

// PRACTICE USING forEACH
// const isPangram = function(text) {
//   let flag = true
//   const alphaArray = ALPHABET.split('')
//   alphaArray.forEach(alphaLetter => {
//     if (!text.includes(alphaLetter)) {
//       flag = false;
//     }
//   })

//   return flag
  
// };


console.log(isPangram('the_quick brown fo jumps over the lazy dog'))

module.exports = isPangram;

// NOTES ON DIFFERENCE OF FOR THINGS IN JS
// for of is more actual language syntax
// forEach is in the library. You call forEach on an array, give it a callback and it will execute that function on every element of the array

// for let index = 5; ...ALPHABET // language construct to loop set of time

// for---in/for---of// loop in collection

// forEach works great for arrays toolbar

// The big difference is that you can pass a function into forEach
// More useful if you saved the function previously


// Look up function keyword

// function keyword functions & arrow methods behave differently. 
// Used for 2 different things in general