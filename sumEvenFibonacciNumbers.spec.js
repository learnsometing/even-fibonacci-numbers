const {calcNthTerm, sum, getIndexClosestToLimit, sumEvenFibonacciTerms} = require('./sumEvenFibonacciNumbers');

describe('getIndexClosestToLimit', () => {
  it('should return the correct index in the fibonacci sequence of the limit', () => {
    expect(getIndexClosestToLimit(4000000)).toEqual(33);
  });
});

describe('calcNthTerm', () => {
  it('should return the correct fibonacci number', () => {
    expect(calcNthTerm(33)).toEqual(3524578);
  });
})

describe('sum', () => {
  it('should return the sum of all fibonacci numbers from 0 to n', () => {
    expect(sum(9)).toEqual(88);
  });
});

describe('sumEvenFibonacciTerms', () => {
  it("should sum even fibonacci numbers whose values are below four million", () => {
    expect(sumEvenFibonacciTerms()).toEqual(4613732);
  });
});