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


const words = ["ground", "control", "to", "major", "tom"];
const provinces = ["British Columbia", "Alberta"];

//map(words);
const map = function(array , callback) {   
  const results= [];
  for (let item of array) {
      results.push(callback(item));
  }
  return results;
}
const results1 = map( words, word => word[0]);
console.log(results1);

assertArraysEqual( map( words, (words, word => word[0])
), [ 'g', 'c', 't', 'm', 't' ]);

assertArraysEqual( map( provinces, (provinces, p => p + ", Canada")
), [ "British Columbia, Canada", "Alberta, Canada"]);