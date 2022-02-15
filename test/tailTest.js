const assert = require('chai').assert;
const _ = require('../index');

describe("# testing Tail Function: ", () => {
  it("It shoud return [lighthouse, labs] when we pass [ Hello, lighthouse, labs]  ", () => {
    assert.deepEqual(_.tail(["Hello", "lighthouse", "labs"]), ["lighthouse", "labs"]);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"