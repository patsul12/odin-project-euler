function sumOfMultiples(limit) {
  this.total = 0;
  this.limit = limit;
  for(i=1; i<=limit; i++) {
    if (i % 3 == 0) {
      this.total += i;
    } else if (i % 5 == 0) {
      this.total += i;
    }
  }
  console.log(this.total);
}

sumOfMultiples(1000);
