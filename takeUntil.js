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
  
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    let condition = callback(item);
    if (condition === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const nums = [1, 2, 3, 0 , 10 , 44, 80];
assertArraysEqual(takeUntil(nums,(nums, n => n === 0)), [1, 2 ,3]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
