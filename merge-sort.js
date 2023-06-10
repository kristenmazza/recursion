#!/usr/bin/node

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  mid = Math.floor(arr.length / 2);

  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid, arr.length);

  const firstHalfSorted = mergeSort(firstHalf);
  const secondHalfSorted = mergeSort(secondHalf);

  let i = 0,
    j = 0,
    k = 0;

  let sortedArr = [];

  // Sort by comparing values in first half to values in second half
  while (i < firstHalfSorted.length && j < secondHalfSorted.length) {
    if (firstHalfSorted[i] < secondHalfSorted[j]) {
      sortedArr[k++] = firstHalfSorted[i++];
    } else {
      sortedArr[k++] = secondHalfSorted[j++];
    }
  }

  // If any values remain, move those values into the sorted array
  for (; i < firstHalfSorted.length; i++) {
    sortedArr[k++] = firstHalfSorted[i];
  }

  for (; j < secondHalfSorted.length; j++) {
    sortedArr[k++] = secondHalfSorted[j];
  }

  return sortedArr;
}

array = [3, 1, -1, 393, 0, 42];
console.log(mergeSort(array));
