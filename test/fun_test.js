var assert = require('assert');
var fun = require('../fun.js');

describe("fun", function() {

  it("should return the amounts consumed", function() {
    result = fun.quantity("Hi Xola thanks for joining us last night. Your team ate 8 burgers , drank 17 beers and 11 fantas");
    assert.deepEqual(result, {
      "burgers": 8,
      "beers": 17,
      "fantas": 11
    });
  });

  it("should return the cost of each food item", function() {
    result = fun.cost("Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fantas 9");
    assert.deepEqual(result, {
      "burgers": 37,
      "beers": 12,
      "fantas": 9
    });
  });

  it("should return the total cost of the bill", function() {
    result = fun.totalBill({"burgers": 8,"beers": 17,"fantas": 11},
                      {"burgers": 37,"beers": 12,"fantas": 9});
    assert.equal(result, 599);
  });
});
