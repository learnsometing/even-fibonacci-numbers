function sumEvenFibonacciTerms(limit){
  var sum = 0;
  var fib1 = 2;
  var fib2 = 3;
  var temp;
  
  while (fib1 <= limit){
    if (fib1 % 2 === 0) sum += fib1;
    temp = fib1;
    fib1 = fib2;
    fib2 = temp + fib2
  }

  return sum;
}


module.exports = sumEvenFibonacciTerms;