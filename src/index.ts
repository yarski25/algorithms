import { binarySearch } from "./search/binarySearch";
import { linearSearch } from "./search/linearSearch";
import { bubbleSort } from "./sort/bubbleSort";
import { insertionSort } from "./sort/insertionSort";

const testArray = [5, 3, 8, 4, 6];
console.log(`test array: [${testArray}]`);

// buble sort O(nˆ2)
console.log(`buble sort:`);
console.log(bubbleSort(testArray));

// insertion sort O(nˆ2)
console.log(`insertion sort:`);
console.log(insertionSort(testArray));

// linear search O(n)
console.log(`linear search:`);
console.log(linearSearch(testArray, 6));

// binary search O(log2n)
console.log(`binary search:`);
console.log(binarySearch(testArray, 6));
