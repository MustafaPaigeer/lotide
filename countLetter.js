const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let output = {};
  let stringToCount = string.replace(/ /g,'');
  for (const char of stringToCount) {
    if (char in output) {
      output[char] += 1;
    }
    if (!(char in output)) {
      output[char] = 1;
    }
  }
  return output;
};


const letterCount = countLetters("lighthouse in the house");
assertEqual(letterCount['h'], 4);