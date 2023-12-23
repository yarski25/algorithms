// interface Graph {
//   a?: Array<string>;
//   b?: Array<string>;
//   c?: Array<string>;
//   d?: Array<string>;
//   e?: Array<string>;
//   f?: Array<string>;
//   g?: Array<string>;
// }

type Graph = { [key: string]: Array<string> };
// graph includes only from left to right;

//const graph: Graph = {};
// const graph: Graph = {};

// graph.a = ["b", "c"];
// graph.b = ["f"];
// graph.c = ["d", "e"];
// graph.d = ["f"];
// graph.e = ["f"];
// graph.f = ["g"];

export function breadthSearch(graph: Graph, start: string, end: string) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift() as string;
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}
