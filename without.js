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

const without = function(sourceArray, itemsToRemove) {
    for (let i = 0; i < sourceArray.length; i++) {
        for (let j = 0; j < itemsToRemove.length; j++) {
            if (sourceArray[i] === itemsToRemove[j]) {
                sourceArray.splice(i, 1)
            }
        }
    }
    return sourceArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);