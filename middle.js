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
    console.log(`Assertion Passed: ${arr1} ===  ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let arrayMiddle = Math.floor(array.length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[arrayMiddle]];
  } else if (array.length % 2 === 0) {
    return array.slice(arrayMiddle - 1 , arrayMiddle + 1);
  }
};

const testArray = ([2, 44, 33, 55, "apple", "banana", "blueberry", 100, 400, 'jj']);
assertArraysEqual(middle(testArray), ["apple", "banana"]);