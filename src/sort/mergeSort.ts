const temp = [2, 4, 1, 0, 3];

function merge(array1: Array<number>, array2: Array<number>) {
  // make a new array and have two values pointers
  let result = [],
    i = 0,
    j = 0;

  // sort the 1st array
  if (array1.length > 1) {
    let min = 0;
    for (let i = 0; i < array1.length; i++) {
      if (i !== min) {
        if (array1[i] < array1[min]) {
          // swap elements
          [array1[i], array1[min]] = [array1[min], array1[i]];
          // change the minimum
          min = i;
        }
      }
    }
  }

  // sort the 2nd array
  if (array2.length > 1) {
    let min = 0;
    for (let i = 0; i < array2.length; i++) {
      if (i !== min) {
        if (array2[i] < array2[min]) {
          // swap elements
          [array2[i], array2[min]] = [array2[min], array2[i]];
          // change the minimum
          min = i;
        }
      }
    }
  }

  // value comparison
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  // push the rest of array1
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  // push the rest of array2
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

export function mergeSort(array: Array<number>) {
  // best case
  if (array.length <= 1) return array;

  // split into two parts
  let mid = Math.ceil(array.length / 2);

  let array1 = array.slice(0, mid);

  let array2 = array.slice(mid);

  let array1_subarrays = [],
    sorted_array1_subarrays: Array<number> = [];
  let array2_subarrays = [],
    sorted_array2_subarrays: Array<number> = [];

  // loop through array 1 making subarrays of two elements
  for (let i = 0; i < array1.length; i += 2) {
    array1_subarrays.push(array1.slice(i, i + 2));
  }

  // loop through array 2 making subarrays of two elements
  for (let i = 0; i < array2.length; i += 2) {
    array2_subarrays.push(array2.slice(i, i + 2));
  }

  // sort each subarray of array 1
  for (let i = 0; i < array1_subarrays.length; i += 2) {
    let result = merge(array1_subarrays[i], array1_subarrays[i + 1]);
    result.forEach((value) => sorted_array1_subarrays.push(value));
  }

  // sort each subarray of array 2
  for (let i = 0; i < array2_subarrays.length; i += 2) {
    let result = merge(array2_subarrays[i], array2_subarrays[i + 1]);
    result.forEach((value) => sorted_array2_subarrays.push(value));
  }

  let result = merge(sorted_array1_subarrays, sorted_array2_subarrays);

  return result;
}
