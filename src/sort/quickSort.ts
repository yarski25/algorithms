function partition(items: Array<number>, left: number, right: number) {
  // left and right are pointers

  let pivot = items[Math.floor((right + left) / 2)],
    i = left, // left pointer
    j = right; // right pointer

  while (i <= j) {
    // increment left pointer if the value is less than the pivot
    while (items[i] < pivot) i++;

    // decrement ritght pointer if the value is more than the pivot
    while (items[j] > pivot) j--;

    // else we swap
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  // return the left pointer
  return i;
}

export function quickSort(items: Array<number>, left: number, right: number) {
  let index;

  if (items.length > 1) {
    //get the left pointer returned
    index = partition(items, left, right);
    if (left < index - 1) {
      // more elements on the left side
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      // more elements on the right side
      quickSort(items, index, right);
    }
  }
  // return the sorted array
  return items;
}
