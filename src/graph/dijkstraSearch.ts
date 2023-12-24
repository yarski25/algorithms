type Node = { [key: string]: number };
type Graph = { [key: string]: Node };

// const graph: Graph = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

export function dijkstraSearch(graph: Graph, start: string, end: string) {
  const costs: Node = {};
  const processed: Array<string> = [];
  let neighbors: Node = {};
  Object.keys(graph).forEach((node: string) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor: string) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs: Node, processed: Array<string>) {
  let lowerCost = 1000000;
  let lowestNode;
  Object.keys(costs).forEach((node: string) => {
    let cost = costs[node];
    if (cost < lowerCost && !processed.includes(node)) {
      lowerCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}
