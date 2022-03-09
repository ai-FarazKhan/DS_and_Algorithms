// function fibonacciSeries(n) {
//   const results = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = results[i - 1];
//     const b = results[i - 2];
//     results.push(a + b);
//   }
//   console.log(results);
//   return results[n];
// }

// const results = fibonacciSeries(4);
// console.log(results);

// Solution 2. Using Recursive method.

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
const results = fib(6);
console.log(results);
