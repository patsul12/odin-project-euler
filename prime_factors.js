function isPrime(number) {
      range = Math.floor(Math.sqrt(number));
          for (var i = range; i > 1; i--) {
                    if (number % i == 0) {
                                  return false;
                                          }
                        }
              return true;
}

function largestPrimeFactor(limit) {
      for (var i = (limit - 1); i > 1; i--) {
                if ((limit % i == 0) && isPrime(i)) {
                              return i;
                                      }
                    }
          return "Number started as a prime";
}
