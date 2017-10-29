// Write a function that returns the n-th prime number

function nthPrime(n) {
  let primes = [ ];
  for (let candidate = 2; primes.length !== n; candidate++) {
    if(primes.every(x => (candidate % x !== 0)))
      primes.push(candidate);
  }
  return primes.pop();
}

module.exports = nthPrime;
