const sumEvenFibonacciTerms = require('./sumEvenFibonacciTerms');

describe('sumEvenFibonacciTerms', () => {
  it("should sum even fibonacci numbers whose values are below four million", () => {
    // I googled what the result should be to write the test
    expect(sumEvenFibonacciTerms(4000000)).toEqual(4613732);
  });
});