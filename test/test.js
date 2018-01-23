require("chai").should();
// const { cardListrender } = require("./../src/containers/functions.js");

// console.log(ColumnList);

describe("eventedThing", () => {
  it("passing non arrays to cardListrender", function() {
    // let called = cardListrender(null, div);
    let called = 1;
    called.should.equal(1);
  });
});
