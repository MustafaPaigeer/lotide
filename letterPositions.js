const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
      break;
    }
  }
  return result;
};
const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`Assertion Passed: ${result} ===  ${result}`);
  } else {
    console.log(`Assertion Failed: ${result} !== true`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!(sentence[i] in results)) {
        results[sentence[i]] = [i];
      } else if (sentence[i] in results) {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);