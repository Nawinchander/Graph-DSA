///Topological Sort (Kahn’s Algorithm)

function topologicalSort(graph) {
  let inDegree = {};
  let queue = [];
  let result = [];

  for (let node in graph) {
    inDegree[node] = 0;
  }

  for (let node in graph) {
    for (let neighbor of graph[node]) {
      inDegree[neighbor]++;
    }
  }

  for (let node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }

  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    for (let neighbor of graph[node]) {
      inDegree[neighbor]--;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

let graph = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: ["H", "F"],
  F: ["G"],
  G: [],
  H: []
};

console.log(topologicalSort(graph));

