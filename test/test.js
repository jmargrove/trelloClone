require("chai").should();
// let ColumnList = require("./../src/containers/ColumnList.js");

// console.log(ColumnList);

describe('eventedThing', () => {
  it('should invoke the callback of a registered event', function () {
    let called = 0;
    called.should.equal(2);
  })
