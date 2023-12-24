type Graph = { [key: string]: Array<string> };
// graph includes only from left to right;

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
