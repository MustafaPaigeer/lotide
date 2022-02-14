const assertArraysEqual = require('../assertArraysEquals')
const middle = require('../middle');

const testArray = ([2, 44, 33, 55, "apple", "banana", "blueberry", 100, 400, 'jj']);
assertArraysEqual(middle(testArray), ["apple", "banana"]);