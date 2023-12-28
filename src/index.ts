import { breadthSearch } from "./graph/breadthSearch";
import { dijkstraSearch } from "./graph/dijkstraSearch";
import { cashFunction, factorial2 } from "./other/cash";
import { factorial } from "./recursion/factorial";
import { fibonachi } from "./recursion/fibonachi";
import { binarySearch, recursiveBinarySearch } from "./search/binarySearch";
import { linearSearch } from "./search/linearSearch";
import { bubbleSort } from "./sort/bubbleSort";
import { insertionSort } from "./sort/insertionSort";
import { mergeSort } from "./sort/mergeSort";
import { quickSort } from "./sort/quickSort";
import { selectionSort } from "./sort/selectionSort";
import { BinaryTree } from "./structures/binaryTree";
import { LinkedList } from "./structures/linkedList";
import { iteration, recursive } from "./tree/treeTraversal";

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

// merge sort O(n*log(n))
console.log(`merge sort:`);
console.log(mergeSort(testArray));

// quick sort O(nˆ2) avg O(nlogn)
console.log(`quick sort:`);
console.log(quickSort(testArray, 0, testArray.length - 1));

//==>  searching <==

// linear search O(n)
console.log(`linear search:`);
console.log(linearSearch(testArray, 6));

// binary search O(log2n)
console.log(`binary search:`);
console.log(binarySearch(testArray, 6));

// recursive binary search O(log2n)
console.log(`recursive binary search:`);
console.log(recursiveBinarySearch(testArray, 6, 0, testArray.length));

//==> recursion test <===

// factorial implementation
console.log(`factorial function:`);
console.log(factorial(5));

// fibonaci implementation
console.log(`fibonaci function:`);
console.log(fibonachi(7));

//===> graph search <===

// graph search

// graph includes only from left to right;
type Graph = { [key: string]: Array<string> };
const graph: Graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];
console.log(`graph search from left to right:`);
console.log(breadthSearch(graph, "a", "g"));

// adjacency matrix to such graph case
const adjMatrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

// dijkstra shortest path
type Node = { [key: string]: number };
type GraphDist = { [key: string]: Node };

const graphDist: GraphDist = {};
graphDist.a = { b: 2, c: 1 };
graphDist.b = { f: 7 };
graphDist.c = { d: 5, e: 2 };
graphDist.d = { f: 2 };
graphDist.e = { f: 1 };
graphDist.f = { g: 1 };
graphDist.g = {};

console.log(`graph search from left to right:`);
console.log(dijkstraSearch(graphDist, "a", "g"));

//===> tree algorithms <===

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

console.log(`tree algorithm:`);
console.log(recursive(tree));
console.log(iteration(tree));

//===> cash functions <===

console.log(`cash function:`);
const cashFactorial = cashFunction(factorial2);
cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);

//===> structures <===

// linked list
console.log(`linked list:`);
const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();

// binary tree search
console.log(`binary tree search:`);
const binTree = new BinaryTree();
binTree.add(5);
binTree.add(2);
binTree.add(6);
binTree.add(2);
binTree.add(1);

binTree.print();
