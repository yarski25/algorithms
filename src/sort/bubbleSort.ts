export function bubbleSort(array: Array<number>) {
  // outer pass
  for (let i = 0; i < array.length; i++) {
    // inner pass
    for (let j = 0; j < array.length - i - 1; j++) {
      // value comparison using ascending order
      if (array[j + 1] < array[j]) {
        // swapping
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
}
