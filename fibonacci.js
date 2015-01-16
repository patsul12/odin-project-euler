function Fibonacci(limit) {
  this.limit = limit;
  var first = 1;
  var second = 1;
  while (first < limit) {
    first_copy = first;
    if (first % 2 == 0) {
    }
    first = first + second;
    second = first_copy;
  }
  console.log(this.sum);
}

Fibonacci(4000000);
    
