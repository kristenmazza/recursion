#!/usr/bin/node

function mergeSort(
  arr,
  start = 1,
  end = arr.length,
  sortedArr = [],
  i = 0,
  j = 0,
  k = 0
) {
  if (arr.length <= 1) return arr;

  mid = Math.floor(arr.length / 2);

  let firstHalf = arr.slice(start - 1, mid);
  let secondHalf = arr.slice(mid + start - 1, end);

  console.log("unsortedArr " + arr);

  const firstHalfSorted = mergeSort(firstHalf);
  const secondHalfSorted = mergeSort(secondHalf);

  while (i < firstHalfSorted.length && j < secondHalfSorted.length) {
    if (firstHalfSorted[i] < secondHalfSorted[j]) {
      sortedArr[k++] = firstHalfSorted[i++];
    } else {
      sortedArr[k++] = secondHalfSorted[j++];
    }
  }

  for (; i < firstHalfSorted.length; i++) {
    sortedArr[k++] = firstHalfSorted[i];
  }

  for (; j < secondHalfSorted.length; j++) {
    sortedArr[k++] = secondHalfSorted[j];
  }

  console.log("sortedArr " + sortedArr);

  return sortedArr;
}

array = [3, 1, 124, 43, 434];
console.log(mergeSort(array));
