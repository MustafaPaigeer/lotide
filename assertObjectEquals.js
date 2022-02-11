
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

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      const arr = object1[key];
      for (let i = 0; i < arr.length - 1; i++) {
        if (object1[key].length !== object2[key].length) return false;
        eqArrays(object1[key], object2[key]);
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = eqObjects(actual, expected);
  if (result) {
    console.log(` ✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });