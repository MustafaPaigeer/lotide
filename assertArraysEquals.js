const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`Assertion Passed: ${result} ===  ${result}`);
  } else {
    console.log(`Assertion Failed: ${result} !== true`);
  }
};

module.exports = assertArraysEqual;