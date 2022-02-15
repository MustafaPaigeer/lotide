const assert = require('chai').assert;
const  _= require('../index');

// Mocha and chai based test code

describe("Testing Head function with Mocha and Chai", () => {
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(_.head([1,2, 3]), 1);
    });
    it("returns 5 for ['5']", () => {
        assert.strictEqual(_.head(['5']), '5');
    });
});
