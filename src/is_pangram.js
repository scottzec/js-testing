const isPangram = function(text) {
  if (text.includes('x')) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPangram;
