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

assertArraysEqual([1, 2, 3], [1, 2, 4]);
