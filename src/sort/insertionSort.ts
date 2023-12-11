export function insertionSort(array: Array<number>) {
  // start from the second element
  for (let i = 1; i < array.length; i++) {
    // go through the elements behind it
    for (let j = i - 1; j > -1; j--) {
      // value comparison using ascending order
      if (array[j + 1] < array[j]) {
        // swap
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return array;
}
