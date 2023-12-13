export function selectionSort(array: Array<number>) {
  let min;
  let count = 0;
  // start passes
  for (let i = 0; i < array.length; i++) {
    // index of the smallest element to be the ith element
    count++;
    min = i;

    // check through the rest of the array for a lesser element
    for (let j = i + 1; j < array.length; j++) {
      count++;
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // compare the indexes
    if (min !== i) {
      // swap
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  console.log(`number of operations: ${count}`);
  return array;
}

// const test = [16, 8, 4, 2, 1, 3, 6, 5, 7, 11, 9, 10, 13, 12, 15, 14];
// const result = selectionSort(test);

// count;
