const assert = require('chai').assert;
const _ = require('../index');

describe("Testing the Middle Function: ", () => {
    it("it should return[44, 'apple'] when we pass [2, 44, 'apple', 'banana']", () => {
        assert.deepEqual(_.middle([2, 44, "apple", "banana"]), [44, "apple"])
    });
});

// const testArray = ([2, 44, "apple", "banana"]);
// assertArraysEqual(middle(testArray), [44, "apple"]);