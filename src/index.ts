import { binarySearch } from "./search/binarySearch";
import { linearSearch } from "./search/linearSearch";
import { bubbleSort } from "./sort/bubbleSort";
import { insertionSort } from "./sort/insertionSort";
import { mergeSort } from "./sort/mergeSort";
import { selectionSort } from "./sort/selectionSort";

// const testArray = [5, 3, 8, 4, 6];
const testArray = [16, 8, 4, 2, 1, 3, 6, 5, 7, 11, 9, 10, 13, 12, 15, 14];
console.log(`test array: [${testArray}]`);

//==>  sorting <==

// buble sort O(nˆ2)
console.log(`buble sort:`);
console.log(bubbleSort(testArray));

// insertion sort O(nˆ2)
console.log(`insertion sort:`);
console.log(insertionSort(testArray));

// selection sort O(nˆ2)
console.log(`selection sort:`);
console.log(selectionSort(testArray));

// selection sort O(n*log(n))
console.log(`merge sort:`);
console.log(mergeSort(testArray));

//==>  searching <==

// linear search O(n)
console.log(`linear search:`);
console.log(linearSearch(testArray, 6));

// binary search O(log2n)
console.log(`binary search:`);
console.log(binarySearch(testArray, 6));
