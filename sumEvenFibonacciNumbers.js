const SQ5 = Math.sqrt(5);
const PHI = (SQ5 + 1) / 2;
const PSI = (SQ5 - 1) / 2;

function calcNthTerm(n){
  // returns the nth fibonacci term calculated using Binet's formula

  return Math.round((Math.pow(PHI, n) - Math.pow(PSI, n)) / SQ5);
}

function getIndexClosestToLimit(limit){
  // returns the index of the fibonacci term closest to the limit
  // i = (log(limit) + log(sqrt(5)))/ log(phi) where phi = log(sqrt(5 + 1) / 2)
  
  return Math.floor((Math.log(limit) + Math.log(SQ5)) / Math.log(PHI));
}

function sum(n){
  return calcNthTerm(n + 2) - 1;
}

function sumEvenFibonacciTerms(){
  //steps
    // 1. calculate the index of the fib term closest to the limit
    // 2. calculate the sum of fibonacci terms using closed form summation expression
    // 3. divide result by 2.

  var idx = getIndexClosestToLimit(4e6);
  return sum(idx) / 2;
}


module.exports = {calcNthTerm, getIndexClosestToLimit, sum, sumEvenFibonacciTerms};