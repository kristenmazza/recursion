#!/usr/bin/node

// Iterative
function fibs(n) {
  let arr = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr.splice(0, n);
}

// Recursive
function fibsRec(n, arr = [], next = 1, last = 0) {
  if (n > 0) {
    return fibsRec(n - 1, arr.concat(next), next + last, next);
  }
  return arr;
}

console.log(fibs(10));
console.log(fibsRec(8));
